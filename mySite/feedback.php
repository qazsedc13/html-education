<!doctype html>
<html>
<head>
	<?php
		$title = "Обратная связь";
		require_once "blocks/head.php"
	?>
</head>

<body>
	<?php require_once "blocks/header.php"?>
    <div id="wrapper">
    	<div id="leftCol">
			<input type="text" placeholder="Имя" id="name" name="name" /><br />
            <input type="text" placeholder="Email" id="email" name="email" /><br />
            <input type="text" placeholder="Тема сообщения" id="subject" name="subject" /><br />
            <textarea name="message" id="message" placeholder="Введите сюда ваше сообщение"></textarea><br /> 
            <input type="button" name="done" id="done" value="Отправить" /><br />     
        </div>
        <?php require_once "blocks/rightCol.php"?>  
    </div>    
	<?php require_once "blocks/footer.php"?>
</body>
</html>