<?php
	include('dbconnect.php');
	session_start();

	$email = $_SESSION['email'];
	$data = $_GET['data'];

	$mysqli->query("UPDATE USERS SET data='" . $data . "' WHERE email='". $email . "'");



mysqli_close($mysqli);
?>