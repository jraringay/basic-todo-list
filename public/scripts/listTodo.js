const listTodo = () => {
  $.getJSON("/tasks")
  .then((tasks) => {
    if(tasks.length > 0) {
      $.each(tasks, (i, item) => {
        let status
        if(!item.done_at) {
          status = "Incomplete"
        } else {
          status = "Complete"
        }
        $('.tasks').append(`
          <tr class="current">
            <td>${item.created_at}</td>
            <td>${item.task}</td>
            <td>${status}</td>
            <td>Placeholder text</td>
          </tr>
        `)
      })
    } else {
      $('.tasks').append(`
        <tr class="empty">
          <td colspan="4">There are no tasks in your To Do list.</td>
        </tr>
      `)
    }
  })
  .catch((err) => {
    $('.tasks').append(`
      <tr class="error">
        <td colspan="4">Error</td>
        <td colspan="4">${err.message}</td>
      </tr>
    `)
  })
}

listTodo()