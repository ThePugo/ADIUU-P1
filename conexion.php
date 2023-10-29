<?php
//Conecta con la base de datos (pcparts)
$bd = mysqli_connect("localhost", "root", "", "pcparts"); //conexion con DB
  if (!$bd) {
    die("Connection failed: " . mysqli_connect_error());
  }

$query = mysqli_query($bd, "SELECT COUNT(*) FROM cpu WHERE brand='Intel'"); //SELECT DE NÚMERO DE CPUS INTEL
$cpusIntel= mysqli_fetch_all($query, MYSQLI_NUM);

$query = mysqli_query($bd, "SELECT COUNT(*) FROM cpu WHERE brand='AMD'"); //SELECT DE NÚMERO DE CPUS AMD
$cpusAMD= mysqli_fetch_all($query, MYSQLI_NUM);

$query = mysqli_query($bd, "SELECT COUNT(*) FROM gpu WHERE brand='NVIDIA'"); //SELECT DE NÚMERO DE GPUS NVIDIA
$gpusNVIDIA = mysqli_fetch_all($query, MYSQLI_NUM);

$query = mysqli_query($bd, "SELECT COUNT(*) FROM gpu WHERE brand='AMD'"); //SELECT DE NÚMERO DE GPUS AMD
$gpusAMD = mysqli_fetch_all($query, MYSQLI_NUM);

$query = mysqli_query($bd, "SELECT COUNT(*) FROM motherboard WHERE brand='Intel'"); //SELECT DE NÚMERO DE MOTHERBOARDS INTEL
$mobosIntel = mysqli_fetch_all($query, MYSQLI_NUM);

$query = mysqli_query($bd, "SELECT COUNT(*) FROM motherboard WHERE brand='AMD'"); //SELECT DE NÚMERO DE MOTHERBOARDS AMD
$mobosAMD = mysqli_fetch_all($query, MYSQLI_NUM);

$query = mysqli_query($bd, "SELECT * FROM psu"); //SELECT DE PSUs
$psu = mysqli_fetch_all($query, MYSQLI_NUM);

$query = mysqli_query($bd, "SELECT * FROM cpu"); //SELECT DE CPUs
$cpu= mysqli_fetch_all($query, MYSQLI_NUM);

$query = mysqli_query($bd, "SELECT * FROM gpu"); //SELECT DE GPUs
$gpu= mysqli_fetch_all($query, MYSQLI_NUM);

$query = mysqli_query($bd, "SELECT socket FROM motherboard WHERE brand='Intel'"); //SELECT DE sockets de Intel de MOBO
$moboSocketsIntel= mysqli_fetch_all($query, MYSQLI_NUM);

$query = mysqli_query($bd, "SELECT socket FROM motherboard WHERE brand='AMD'"); //SELECT DE sockets de AMD de MOBO
$moboSocketsAMD= mysqli_fetch_all($query, MYSQLI_NUM);

$query = mysqli_query($bd, "SELECT socket FROM cpu WHERE brand='Intel'"); //SELECT DE sockets de Intel de CPU
$cpuSocketsIntel= mysqli_fetch_all($query, MYSQLI_NUM);

$query = mysqli_query($bd, "SELECT socket FROM cpu WHERE brand='AMD'"); //SELECT DE sockets de AMD de CPU
$cpuSocketsAMD= mysqli_fetch_all($query, MYSQLI_NUM);


$data = [
    "cpusIntel" => $cpusIntel,
    "cpusAMD" => $cpusAMD,
    "gpusNVIDIA" => $gpusNVIDIA,
    "gpusAMD" => $gpusAMD,
    "mobosIntel" => $mobosIntel,
    "mobosAMD" => $mobosAMD,
    "psus" => $psu,
    "cpus" => $cpu,
    "gpus" => $gpu,
    "mobosSocketIntel" => $moboSocketsIntel,
    "mobosSocketAMD" => $moboSocketsAMD,
    "cpusSockIntel" => $cpuSocketsIntel,
    "cpusSockAMD" => $cpuSocketsAMD
  ];

echo json_encode($data); //codificar en JSON
?>