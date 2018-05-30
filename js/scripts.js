$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul.cat").prepend("<li>Meow</li>");
    $("ul.dog").prepend("<li>Woof!</li>");
    $("img").show(".catpic");
  });

  $("button#woof").click(function() {
    $("ul.cat").prepend("<li>Meow</li>");
    $("ul.dog").prepend("<li>Woof!</li>");
    $("img").show(".dogpic")
  });
});
