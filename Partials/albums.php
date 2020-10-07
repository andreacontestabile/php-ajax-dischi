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
