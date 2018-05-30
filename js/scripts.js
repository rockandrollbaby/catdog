$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul.cat").prepend("<li>Meow</li>");
    $("ul.dog").prepend("<li>Woof!</li>");
    $(".catpic").toggle();
  });

  $("button#woof").click(function() {
    $("ul.cat").prepend("<li>Meow</li>");
    $("ul.dog").prepend("<li>Woof!</li>");
    $(".dogpic").toggle();
  });
});
