$name = $_POST['user_name'];
$email = $_POST['user_email'];
$tel - $_POST['user_phone'];

if (mail("ilya_ej@vk.com", "Заявка с сайта", "ФИО:".$name.". E-mail: ".$email ,"From: example2@mail.ru \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>