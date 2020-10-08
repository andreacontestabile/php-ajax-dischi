<main>
  <div class="container">
    <ul class="albums-list">

    </ul>
  </div>
</main>


  <script id="album-template" type="text/x-handlebars-template">
    <li class="albums-list-item">
      <img src="{{poster}}" alt="">
      <h2>{{title}}</h2>
      <div class="album-details">
        <h3>{{author}}</h3>
        <h3>{{year}}</h3>
      </div>
    </li>
  </script>
  <script id="option-template" type="text/x-handlebars-template">
    <option value="{{author}}">{{author}}</option>
  </script>
  <script src="dist/app.js" charset="utf-8"></script>
</body>
</html>
