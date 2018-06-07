
$("body").on("submit", ".createBurger", function(event) {
    event.preventDefault();

    var newBurger = {
        burger_name: $("#createdName").val().trim(),
        devoured: false
    }

    $.ajax("/burgers/create", {
        type: "POST",
        data: newBurger
    }).done(function(data) {
        location.reload();
    });

    $("#createdName").val("");

});

$("body").on("click", ".devourIt", function(event) {
    event.preventDefault();

    var id = $(this).data("id");
    var devouredBurger = {
        devoured: true
    };

    $.ajax("/burgers/" + id, {
        type: "PUT",
        data: devouredBurger
      }).done(function(data) {
          
          location.reload();
      });
});
