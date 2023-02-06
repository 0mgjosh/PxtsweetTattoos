<?php
use PHPMailer\PHPMailer\PHPMailer;

require('PhpMailer/src/Exception.php');
require('PhpMailer/src/PHPMailer.php');
require('PhpMailer/src/SMTP.php');


$_fname = $_POST['fname'];
$_lname = $_POST['lname'];
$_phone = $_POST['phone'];
$_reason = $_POST['reason'];
$_message = $_POST['message'];
$_email = $_POST['email'];
    
    
$mail = new PHPMailer(true);
$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->isHTML(false);

$mail->Host = "smtp.gmail.com";
$mail->SMTPSecure = "tls";
$mail->Port = 587;
$mail->Username = "pxtweb7@gmail.com";
$mail->Password = "igzsufemgfagpars";

$mail->setFrom("pxtweb7@gmail.com", "From Potential Client");
$mail->Subject = $_reason;
$mail->Body = 'Name: ' . $_fname . ' ' . $_lname . "\n\n" .
"Phone: " . $_phone . "\n\n" .
"Email: " . $_email . "\n\n" . 'Message: ' . $_message;
$mail->addAddress("jswe93@icloud.com", "Joshua Sweet");

if ($mail->send()) {
    header("Location: thanks.html");
}
else{
    header("Location: failed.html");
} 
?>