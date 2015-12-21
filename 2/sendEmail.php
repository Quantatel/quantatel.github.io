<?php
	
	$Message = '';
	
	unset($_POST['submit']);
	
	foreach($_POST as $key => $value)
	{
		$Message .= $key . ': '.$value .'\n';
	}
	
	$to      = 'me@mohammadnabil.com';
	$subject = 'the subject';
	$headers = 'From: nabilsourat@gmail.com' . "\r\n" .
    'Reply-To: nabilsourat@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $Message, $headers);
	
?>