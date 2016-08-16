var groceries=[];

$("#addIt").submit(function(event) {
  var groceryItem = $("input#item").val();
  var groceryAmount = $("input#amount").val();
  event.preventDefault();

  groceries.push([groceryItem, groceryAmount]);
  $("#theList").empty();
  groceries.sort();
  groceries.forEach(function(item) {
    $("#theList").append("<li>(" + item[1] + ") "+ item[0].toUpperCase() + "</li>");
  });
  $("input#item").val("");
  $("input#amount").val("");
  $("input#item").focus();
});
