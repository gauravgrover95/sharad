<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $from = 'From: My-Website'; 
    $to = 'sriramsarad@gmail.com'; 
    $subject = 'Mail sent by a fan from the My-Website';


    $body = "From: $name\n E-Mail: $email\n Message:\n $message";

	if ($_POST['submit']) {

	    if (mail ($to, $subject, $body, $from)) { 
	        echo '<p>Your message has been sent!</p>';
	    } else { 
	        echo '<p>Something went wrong, go back and try again!</p>'; 
	    }

?>