<?php
    //Запускаем сессию
    session_start();
?>
 
<!DOCTYPE html>
<html>
    <head>
        <title>Registration</title>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="css/styles.css">
        <script type="text/javascript" src="js.js"></script>
    </head>
    <body>
        <div id="auth_block">
        <?php
            //Проверяем авторизован ли пользователь
             if(!isset($_SESSION['email']) && !isset($_SESSION['password'])){
              // если нет, то выводим блок с ссылками на страницу регистрации и авторизации
        ?>
        <div id="link_register">
            <a href="form_register.php">Регистрация</a>
        </div>
 
        <div id="link_auth">
            <a href="form_auth.php">Авторизация</a>
        </div>
    <?php
        }else{
        //Если пользователь авторизован, то выводим ссылку Выход
    ?> 

        <div id="link_logout">
      

            <a href="logout.php" onclick="localStorage.removeItem('currentList');">Выход</a></div><br><br><br><br>
            <input  type="button" class="save"  value = "save" onclick="updateBase()">
        </div>

        <?php
    }
    ?>
<br>
</div>
        <div id="header">
            <!-- <h2>Шапка сайта</h2> -->
 
            <!-- <a href="index.php">Главная</a> -->
 
            <div id="auth_block">
 
                <!-- <div id="link_register">
                    <a href="form_register.php">Регистрация</a>
                </div>
 
                <div id="link_auth">
                    <a href="form_auth.php">Авторизация</a>
                </div>
  -->
            </div>
             <div class="clear"></div>
        </div>