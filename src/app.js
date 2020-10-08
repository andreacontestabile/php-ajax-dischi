// JQUERY
const $ = require("jquery");
// HANDLEBARS
const Handlebars = require("handlebars");

$(document).ready(function() {

  $.ajax(
    {
      "url": "http://localhost/php-ajax-dischi/server.php",
      "method": "GET",
      "success": function(data) {
        renderAlbums(data);
        renderSelectList(data);
      },
      "error": function(error) {
        alert("error");
      }
    }
  );

// Evento CHANGE al cambio della select
  $("select.author-filter").change(function() {
    // Salvo il valore della select
    var selectValue = $(this).val();

    $.ajax(
      {
        "url": "http://localhost/php-ajax-dischi/server.php",
        "method": "GET",
        "success": function(data) {
          // A chiamata fatta, eseguo la funzione renderSelect, passando data e il valore della select
          renderSelect(data, selectValue);
        },
        "error": function(error) {
          alert("error");
        }
      }
    );

  });

});

// Funzione renderAlbums
function renderAlbums(data) {
  // Preparo il template Handlebars
  var source = $("#album-template").html();
  var template = Handlebars.compile(source);
  // Per ognuno degli album,
  for (var i = 0; i < data.length; i++) {
    // compilo il template con i dati relativi
    var html = template(data[i]);
    // e appendo l'html risultante nella lista degli album
    $(".albums-list").append(html);
  }

}

// Funzione renderSelect
function renderSelect(data, selectValue) {
  // Preparo il template Handlebars
  var source = $("#album-template").html();
  var template = Handlebars.compile(source);
  // Svuoto la lista degli album corrente
  $(".albums-list").empty();
  // Per ogni album nella risposta
  for (var i = 0; i < data.length; i++) {
    // Se l'autore corrisponde con il valore della select
    if (data[i].author == selectValue || selectValue == "all") {
      // compilo il template con i dati relativi
      var html = template(data[i]);
      // e faccio l'append dell'html nella lista degli album
      $(".albums-list").append(html);
    }
  }
}

function renderSelectList(data) {
  var authorsList = [];
  for (var i = 0; i < data.length; i++) {
    var author = data[i].author;
    if (!authorsList.includes(author)) {
      authorsList.push(author);
    }
  }
  for (var i = 0; i < authorsList.length; i++) {
    var source = $("#option-template").html();
    var template = Handlebars.compile(source);

    var context = {
      "author": authorsList[i]
    }

    var html = template(context)
    $("select.author-filter").append(html);
  }
}
