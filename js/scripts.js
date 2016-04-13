//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly
var groceries=[];

$("#addIt").submit(function(event) {
  var groceryItem = $("input#item").val();
  var groceryAmount = $("input#amount").val();

  groceries.push([groceryAmount, groceryItem]);
  event.preventDefault();
});

$("#showList").click(function() {
  groceries.forEach(function(grocery) {
    $("#theList").append("<li>(" + grocery[0] + ") "+ grocery[1] + "</li>");
  });
});
