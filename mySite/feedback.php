<!doctype html>
<html>
<head>
	<?php
		$title = "Обратная связь";
		require_once "blocks/head.php"
	?>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    <script>
    	$(document).ready(function() {
            $("#done").click (function (){
				$('#messageShow').hide ();
				var name = $("#name").val();
				var email = $("#email").val();
				var subject = $("#subject").val();
				var message = $("#message").val();
				var fail = "";
				if (name.length < 3) fail = "Имя не меньше 3 символов";
				else if (email.split('@').length - 1 == 0|| email.split('.').length - 1 == 0)
					fail = "Вы ввели некорректный email"	;
				else if (subject.length < 5)
					fail = "Тема сообщения менее 5 символов";	
				else if (message.length < 2)
					fail = "Сообщение не менее 20 символов";
				if (fail != "") {
					$('#messageShow').html(fail + "<div class='clear'><br /></div>");
					$('#messageShow').show ();
					return false;	
				}
			});
        });
    </script>
</head>

<body>
	<?php require_once "blocks/header.php"?>
    <div id="wrapper">
    	<div id="leftCol">
			<input type="text" placeholder="Имя" id="name" name="name" /><br />
            <input type="text" placeholder="Email" id="email" name="email" /><br />
            <input type="text" placeholder="Тема сообщения" id="subject" name="subject" /><br />
            <textarea name="message" id="message" placeholder="Введите сюда ваше сообщение"></textarea><br /> 
            <div id="messageShow"></div>
            <input type="button" name="done" id="done" value="Отправить" /><br />     
        </div>
        <?php require_once "blocks/rightCol.php"?>  
    </div>    
	<?php require_once "blocks/footer.php"?>
</body>
</html>