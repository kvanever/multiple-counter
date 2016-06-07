$(function() {
  $("form#number-input").submit(function(event) {
    event.preventDefault();
    var total = parseInt($("input#number1").val());
    var multiple = parseInt($("input#number2").val());
    if (total >= 0 && multiple > 0 && multiple < total) {
      for (i=1; i <= (total/multiple); i++) {
        $(".output ul").append("<li>" + (i * multiple) + "</li>");
    };
    }
    else {
      alert("Please use positive integers and make sure number 2 is less than number 1");
    }

  });
});
