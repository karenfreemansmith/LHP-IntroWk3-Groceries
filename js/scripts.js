//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly

$("#addToList").submit(function(event) {
  event.PreventDefault();
  alert("Adding to list");
});
