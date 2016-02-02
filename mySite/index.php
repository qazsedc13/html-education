<!doctype html>
<html>
<head>
	<?php
		$title = "Новости обо всем";
		require_once "blocks/head.php";
		$news = getNews (3);
	?>
</head>

<body>
	<?php require_once "blocks/header.php"?>
    <div id="wrapper">
    	<div id="leftCol">
        
        <?php
        	for ($i =0; $i < count($news); $i++) {
				if ($i == 0)
					echo "<div id=\"bigArticle\">";
				else
					echo "<div class=\"article\">";
				echo '<img src="/img/articles/'.$news[$i]["id"].'.jpg" alt="Статья '.$news[$i]["id"].'" title="Статья '.$news[$i]["id"].'" />
                <h2>Статья '.$news[$i]["title"].'</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <a href="/article.php">
                	<div class="more">Далее</div>
                </a>
			</div>';
					if ($i == 0) 
						echo "<div class=\"clear\"><br /></div>";
					
			}
		?>
        
        	<!--<div id="bigArticle">
            	<img src="/img/articles/1.jpg" alt="Статья 1" title="Статья 1" />
                <h2>Статья 1</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <a href="/article.php">
                	<div class="more">Далее</div>
                </a>
            </div>
            <div class="clear"><br /></div>
            <div class="article">
            	<img src="/img/articles/2.jpg" alt="Статья 1" title="Статья 1" />
                <h2>Статья 1</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <a href="/article.php">
                	<div class="more">Далее</div>
                </a>
            </div>
            <div class="article">
            	<img src="/img/articles/3.jpg" alt="Статья 1" title="Статья 1" />
                <h2>Статья 1</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <a href="/article.php">
                	<div class="more">Далее</div>
                </a>
            </div>-->            
        </div>
        <?php require_once "blocks/rightCol.php"?>  
    </div>    
	<?php require_once "blocks/footer.php"?>
</body>
</html>