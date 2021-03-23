const listTodo = () => {
  $.getJSON("/tasks")
  .then((tasks) => {
    if(tasks.length > 0) {
      $.each(tasks, (i, item) => {
        $('.tasks').append(`
          <tr class="current">
            <td>${item.created_at}</td>
            <td>${item.task}</td>
          </tr>
        `)
      })
    } else {
      $('.tasks').append(`
        <tr class="empty">
          <td colspan="2">There are no tasks in your To Do list.</td>
        </tr>
      `)
    }
  })
  .catch((err) => {
    $('.tasks').append(`
      <tr class="error">
        <td colspan="2">Error</td>
        <td colspan="2">${err.message}</td>
      </tr>
    `)
  })
}

listTodo()