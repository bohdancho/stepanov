<?php

$recepient = "";
$sitename = "Stepanov";

$name = trim($_POST["Name"]);
$email = trim($_POST["EMail"]);
$msg = trim($_POST["Message"]);
$message = "Имя: $name \nПочта: $email \nСообщение: \n$msg";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");