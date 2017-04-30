<!-- This is a hack to deploy a static site to Heroku
http://blog.teamtreehouse.com/deploy-static-site-heroku -->

<?php header("Location: https://" . $_SERVER["HTTP_HOST"] . "/index.html");  ?>
