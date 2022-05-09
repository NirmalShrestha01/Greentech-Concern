<?php
$name = $_POST['name'];
$phonenumber = $_POST['phonenumber'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];


$email_from = 'info@greentechconcern.com';

$email_subject = 'New Form Submission';

$email_body =  "User Name: $name.\n".
                "User PhoneNumber: $phonenumber.\n".
                "User Email: $email.\n".
                "User Subject: $subject.\n".
                "User Message: $message . \n" ;


$to = 'info@greentechconcern.com' ; 

$headers = "From: $email_from \r\n" ;

$headers .= "Reply-To : $email \r\n";


mail($to , $email_subject , $email_body , $headers);

header("Location: contact.html")
?>