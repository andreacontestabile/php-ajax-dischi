<?php
include "db.php"

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Dischi</title>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="dist/app.css">
</head>
<body>
    <header>
      <div class="container">
        <div class="logo">
          <img src="img/logo.png" alt="Logo">
        </div>
      </div>
    </header>
    <main>
      <div class="container">
        <ul class="albums-list">
          <?php foreach ($database as $album) { ?>
            <li class="albums-list-item">
              <img src="<?php echo $album["poster"]; ?>" alt="">
              <h2><?php echo $album["title"]; ?></h2>
              <div class="album-details">
                <h3><?php echo $album["author"]; ?></h3>
                <h3><?php echo $album["year"]; ?></h3>
              </div>
            </li>
          <?php } ?>
        </ul>
      </div>
    </main>
</body>
</html>
