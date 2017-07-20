<?php
include('dbconnect.php');

// Verify if user exists for login
session_start();

$id = $_SESSION['id'];

$sql = "SELECT * FROM USERS WHERE id='". $id . "'" or die ("ERROR: ".mysqli_error());
$result  = mysqli_query($mysqli, $sql) or die (mysqli_error($mysqli));
$getUser_result =  mysqli_fetch_assoc($result);
$getUser_RecordCount = mysqli_num_rows($result);

if($getUser_RecordCount < 1){
	echo '0';
} else {
	$data = $getUser_result['data'];
	echo $data;
}

mysqli_close($mysqli);
?>