$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Bark</li>");
    $("ul#webpage").prepend("<li>Meow</li>");
    $("ul#user").children("li").first().click(function() {
      alert('Bark');
    });
    });
  });


