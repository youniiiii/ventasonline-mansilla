<?php
$usuario = $_POST["usuario"] ;
$clave = $_POST["password"] ;
$apellido = $_POST["apellidos"] ;
$nombre = $_POST["nombres"] ;
$edad = $_POST["edad"] ;
$email = $_POST["email"];
$mensaje = "hola $nombre, $apellido <br>tu usuario es :$usuario<br> tu contraseña es:$clave";
mail($email,"contacto",$mensaje);


echo "este es el contenido del correo ",$mensaje;

?>