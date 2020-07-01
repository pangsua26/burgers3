// wait until DOM is ready
$(document).ready(function() {
    
    $(".devour-form").on("submit", function(event) {
        // make sure to prevent default on submit event
      event.preventDefault();
  
      var burger_id = $(this).children(".burger_id").val();
      console.log(burger_id);

      // put request
      $.ajax({
        method: "PUT",
        url: "/burgers/" + burger_id
      }).then(function(data) {
        // reload page
        location.reload();
      });
  
    });
  });