<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $details = $_POST['details'];
  $to      = 'paulfitz99@gmail.com';
  $subject = 'Contact form';
  $message = $details;
  $headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

  mail($to, $subject, $message, $headers);
?> 