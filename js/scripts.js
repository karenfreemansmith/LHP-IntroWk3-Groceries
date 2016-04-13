//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly
var groceries=[];

$("#addIt").submit(function(event) {
  var groceryItem = $("input#item").val();
  var groceryAmount = $("input#amount").val();

  groceries.push([groceryItem, groceryAmount]);
  event.preventDefault();
});

$("#showList").click(function() {
  $("#theList").empty();
  /* Map functin returns strange results "A/B" for all items???
  var myGroceries=groceries.map(function(item){
    return item[1].toUpperCase();
  });
  */
  groceries.sort();
  groceries.forEach(function(item) {
    $("#theList").append("<li>(" + item[1] + ") "+ item[0].toUpperCase() + "</li>");
  });
  $("#myList").toggle();
  $("#moreStuff").toggle();
});

$("#hideList").click(function() {
  $("#myList").toggle();
  $("#moreStuff").toggle();
});
