//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly
var groceries=[];
$("#addIt").submit(function(event) {
  var groceryItem = $("input#item").val();
  var groceryAmount = $("input#amount").val();

  groceries.push([groceryAmount, groceryItem]);
  $("#theList").text("(" + groceries[0][0] + ") "+ groceries[0][1]);
  
  event.preventDefault();
});
