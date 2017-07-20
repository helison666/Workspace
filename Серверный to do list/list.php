<?php
    //Подключение шапки
    require_once("header.php");
?>
<!DOCTYPE html>
<html>
<head>
	<title>To do list</title>
</head>
<body>
<meta charset="utf-8">
<link href="css/styles.css" rel="stylesheet"/>

<div id="myDIV" class="header">
  <h2>My To Do List</h2>

  <input type="text" class="inputField" id="myInput" placeholder="Title...">

  <span onclick="newElement(myInput.value, 'false')" class="addBtn">Add</span>
  
  
</div>

<ul id="myUL">
  
</ul>

<script type="text/javascript" src="js.js"></script>

</body>
</html>