<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>Новости обо всём</title>
	<link href="/css/style.css" rel="stylesheet" type="text/css">
</head>

<body>
	<header>
		<div id="logo">
        	<a href="/" title="Перейти на главную"><span>Н</span>овости</a>
        </div>
        <div id="menuHead">
        	<a href="/about.php">
            	<div style="margin-right:5%">О нас</div>
            </a>
            <a href="/feedback.php">
            	<div>Обратная связь</div>
            </a>
        </div>
        <div id="regAuth">
        	<a href="/reg.php">Регистрация</a> | <a href="/auth.php">Авторизация</a>
        </div>
	</header>
    <div id="wrapper">
    	<div id="leftCol">
        	<div id="bigArticle">
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
            </div>            
        </div>
        <div id="rightCol">
        	<div class="banner">
            	<img src="/img/banner_1.gif" alt="Баннер 1" title="Баннер 1" />
            </div>
            <div class="banner">
            	<img src="/img/banner_2.jpg" alt="Баннер 2" title="Баннер 2" />
            </div>      
        </div>    
    </div>    
	<footer>
    	<div id="social">
        	<a href="http://vk.com" title="Группа ВК" target="_blank">
            	<img src="/img/vk.png" alt="ВК" title="ВК">
            </a>
            <a href="http://ok.ru" title="Группа Одноклассники" target="_blank">
            	<img src="/img/ok.png" alt="Одноклассники" title="Одноклассники">
            </a>
            <a href="http://facebook.com" title="Группа Facebook" target="_blank">
            	<img src="/img/facebook.png" alt="Facebook" title="Facebook">
            </a>
            <a href="http://twitter.com" title="Группа Twitter" target="_blank">
            	<img src="/img/twitter.png" alt="Twitter" title="Twitter">
            </a>
        </div>
        <div id="rights">
	      Все права защищены &copy;<?=date ('Y')?>
    	</div>
	</footer>
</body>
</html>