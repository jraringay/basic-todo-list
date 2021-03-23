$(document).ready(() => {
  $.getJSON("/tasks")
  .then((tasks) => {
    if(tasks.length > 0) {
      $.each(tasks, (i, item) => {
        let status
        let finish
        if(!item.is_done) {
          console.log(item.is_done)
          status = "Incomplete"
        } else {
          status = "Complete"
        }
        if(item.done_at === null) {
          finish = 
            `<form action="/complete/${item.id}" method="post">
               <input type="submit" name="finish-task" value="Mark Complete" />
             </form>
             <form action="/remove/${item.id}" method="post">
               <input type="submit" name="delete-task" value="Remove Task" />
             </form>`
        } else {
          finish = item.done_at + 
          `<form action="/remove/${item.id}" method="post">
             <input type="submit" name="delete-task" value="Remove Task" />
           </form>`
        }
        $('.tasks').append(`
          <tr class="current">
            <td>${item.first_name} ${item.last_name}</td>
            <td>${item.created_at}</td>
            <td>${item.task}</td>
            <td class="task-status" id="${item.id}">
              ${status}
            </td>
            <td>${finish}</td>
          </tr>
        `)
      })
    } else {
      $('.tasks').append(`
        <tr class="empty">
          <td colspan="5">There are no tasks in your To Do list.</td>
        </tr>
      `)
    }
  })
  .catch((err) => {
    $('.tasks').append(`
      <tr class="error">
        <td colspan="5">Error</td>
        <td colspan="5">${err.message}</td>
      </tr>
    `)
  })
})