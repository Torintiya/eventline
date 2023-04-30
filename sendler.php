<?php
$to = "ilya_ej@vk.com"; // емайл получателя данных из формы
$tema = "Форма обратной связи"; // тема полученного емайла
$message = "Имя: ".$_POST['user_name']."<br>";//присвоить переменной значение, полученное из формы name=name
$message .= "E-mail: ".$_POST['user_email']."<br>"; //полученное из формы name=email
$message .= "Номер телефона: ".$_POST['user_phone']."<br>"; //полученное из формы name=phone
$headers = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
mail($to, $tema, $message, $headers); //отправляет получателю на емайл значения переменных
header("location: index.html");
?>