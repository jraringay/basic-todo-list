$(document).ready(() => {
  $("form").submit((event) => {
    let formData = {
      task: $("#new-task").val()
    };

    $.ajax({
      url: "/addtask",
      type: "POST",
      data: formData,
      dataType: "json",
      encode: true,
    }).done((task) => {
      console.log(task);
    }).fail((err) => {
      console.log(err);
    })

    event.preventDefault(); // used to prevent the form from behaving by default by reloading the page on submission.

    window.location.reload() // reload page after adding task

  });
});