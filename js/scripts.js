$(function() {
  $("form#number-input").submit(function(event) {
    event.preventDefault();
    var total = parseInt($("input#number1").val());
    var multiple = parseInt($("input#number2").val());
    debugger;
      for (i=1; i <= (total/multiple); i++) {
        $(".output ul").append("<li>" + (i * multiple) + "</li>");
    };
  });
});
