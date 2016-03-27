<?php
	$pages = array(
    array(
        'id' => 'products',
        'title' => 'Produkte'
    ),
    
    array(
        'id' => 'service',
        'title' => 'Service'
    ),
    array(
        'id' => 'exhibition',
        'title' => 'Ausstellungen'
    ),
    array(
        'id' => 'about',
        'title' => 'Über Uns'
    ),
    array(
        'id' => 'contact',
        'title' => 'Kontakt'
    )
);
?>
<!doctype html>
<html lang="de">

<head>
<title>Lamprecht GmbH</title>

<meta charset="utf-8" />
<meta http-equiv="pragma" content="no-cache">

<meta name="robots" content="index, follow">
<meta name="author" content="Lamprecht GmbH">
<meta name="keywords" content="Kachelöfen, Lamprecht, Specksteinöfen, Speicheröfen, Backöfen, Edelstahlkamin">
<meta name="description" content="Als flexibler Meisterbetrieb planen wir ihre Ofenanlage mit fachmännischem Know-How und Fantasie. Die Restauration antiker Öfen gehört auch zu unserem Servicebereich.">
<meta name="viewport" content="user-scalable=0, initial-scale=1.0">

<link rel="stylesheet" href="/css/core.css" type="text/css" />
<link rel="shortcut icon" href="/favicon.ico">
<link rel="shortcut icon" type="image/x-icon" href="/favicon.ico">

<script type="text/javascript" src="/js/jquery.js"></script>
<script type="text/javascript" src="/js/app.js"></script>

<script type="text/javascript" src="//use.typekit.net/tyx6ajp.js"></script>
<script type="text/javascript">try{Typekit.load();}catch(e){}</script>

<link href="http://fonts.googleapis.com/css?family=Droid+Sans:400,700" rel="stylesheet" type="text/css">
<link href="http://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic" rel="stylesheet" type="text/css">

</head>


<!-- <?php
$input = array("001", "002");
$rand_keys = array_rand($input);

echo '<body style="background-image: url(img/bg/'. $input[$rand_keys] .'.jpg); background-position: center -600px;">';
?> -->

<body class="main">

<!-- <div id="loading">
  <div class="middle">
  
		<img src="/img/loading-logo.png" />
		
		<div class="bar">
			<div class="indicator">i</div>
		</div>
		
	</div>
</div> -->

<noscript>
	<div class="msg">
			<span>JS</span>
			<div class="line">line-trough</div>
			<h1>JavaScript ist in ihrem Browser deaktiviert.</h1>
			<h2><i class="fa fa-angle-double-right"></i>&nbsp;&nbsp;Aktivieren Sie Javascript, um diese Website nutzen zu können.&nbsp;&nbsp;<i class="fa fa-angle-double-left back"></i></h2>
	</div>
</noscript>

<div id="audio" class="<?php if ($_COOKIE['audio'] == "true") { echo 'played'; } else { echo "paused"; } ?>">
	<ul class="bars">
		<li class="bar1"></li>
		<li class="bar2"></li>
		<li class="bar3"></li>
		<li class="bar4"></li>
	</ul>
</div>

<audio id="fire-crackle" preload="auto"<?php if ($_COOKIE['audio'] == "true") { echo ' autoplay loop'; } ?>>test
	<source src="/audio/flames.mp3" type="audio/mpeg">
	<source src="/audio/flames.ogg" type="audio/ogg">
</audio>

<div class="main">

<nav>

	<div class="inner">
	
		<div class="logo-inner">
			<img src="/img/logo.png" />
		</div>
		
		<ul class="navi">
<?php
	
	foreach($pages as $page){
		echo "\t\t";
		echo '<li class="'. $page['id'] .'">'. $page['title'] .'</li>' . PHP_EOL;
	}
	
?>
		</ul>

	</div>
	
	<div class="footer">
		<i class="fa fa-angle-double-left" title="Zurück zur Übersicht"></i>
	</div>
	
</nav>

<div class="open-nav">
	<i class="fa fa-angle-double-right" title="Zurück zur Übersicht"></i>
</div>

<?php
	foreach($pages as $page){
		echo '<section class="'. $page['id'] .'">' . PHP_EOL;
		include 'pages/'. $page['id'] . '.php';
		echo PHP_EOL;
		echo '</section>' . PHP_EOL . PHP_EOL;
	}
?>
			
<section class="offers">

</section>


<span class="bg-copyright">Foto: <a href="http://www.tulikivi.com/de" target="_blank">Tulikivi Oyj</a></span>

</body> 
</html>