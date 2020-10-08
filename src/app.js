const $ = require("jquery");
const Handlebars = require("handlebars");

$(document).ready(function() {

  $.ajax(
    {
      "url": "http://localhost/php-ajax-dischi/server.php",
      "method": "GET",
      "success": function(data) {
        renderAlbums(data);
      },
      "error": function(error) {
        alert("error");
      }
    }
  );

});

function renderAlbums(data) {
  var source = $("#album-template").html();
  var template = Handlebars.compile(source);

  for (var i = 0; i < data.length; i++) {
    var html = template(data[i]);
    $(".albums-list").append(html);
  }
  
}
