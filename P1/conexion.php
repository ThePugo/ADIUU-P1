<?php
//Conecta con la base de datos (pcparts)
$bd = mysqli_connect("localhost", "root", "", "pcparts"); //conexion con DB
  if (!$bd) {
    die("Connection failed: " . mysqli_connect_error());
  }

//consultas para la primera gráfica
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

//consultas para la segunda gráfica
$query = mysqli_query($bd, "SELECT * FROM cpu"); //SELECT DE CPUs
$cpu= mysqli_fetch_all($query, MYSQLI_NUM);

$query = mysqli_query($bd, "SELECT * FROM gpu"); //SELECT DE GPUs
$gpu= mysqli_fetch_all($query, MYSQLI_NUM);

//consultas para la tercera gráfica
$query = mysqli_query($bd, "SELECT socket FROM motherboard WHERE brand='Intel'"); //SELECT DE sockets de Intel de MOBO
$moboSocketsIntel= mysqli_fetch_all($query, MYSQLI_NUM);

$query = mysqli_query($bd, "SELECT socket FROM motherboard WHERE brand='AMD'"); //SELECT DE sockets de AMD de MOBO
$moboSocketsAMD= mysqli_fetch_all($query, MYSQLI_NUM);

$query = mysqli_query($bd, "SELECT socket FROM cpu WHERE brand='Intel'"); //SELECT DE sockets de Intel de CPU
$cpuSocketsIntel= mysqli_fetch_all($query, MYSQLI_NUM);

$query = mysqli_query($bd, "SELECT socket FROM cpu WHERE brand='AMD'"); //SELECT DE sockets de AMD de CPU
$cpuSocketsAMD= mysqli_fetch_all($query, MYSQLI_NUM);

//consultas para la cuarta gráfica
$query = mysqli_query($bd, "SELECT * FROM memory");
$ram = mysqli_fetch_all($query, MYSQLI_NUM);

$query = mysqli_query($bd, "SELECT * FROM storage");
$storage = mysqli_fetch_all($query, MYSQLI_NUM);

$query = mysqli_query($bd, "SELECT type, size, COUNT(*) as count FROM MEMORY GROUP BY type, size ORDER BY type, size");
$ramsizecount = mysqli_fetch_all($query, MYSQLI_NUM);

$query = mysqli_query($bd, "SELECT type, space, COUNT(*) as count FROM STORAGE GROUP BY type, space ORDER BY type, space");
$storagesizecount = mysqli_fetch_all($query, MYSQLI_NUM);

//PARA LAS SPECS DEL PC
$query = mysqli_query($bd, "SELECT * FROM cpu WHERE name='Intel Core i5-11400F 2.6 GHz 6-Core Processor (BX8070811400F)'");
$mypccpu1 = mysqli_fetch_all($query, MYSQLI_NUM);

$query = mysqli_query($bd, "SELECT * FROM cooler WHERE name='Noctua NH-U9S chromax.black 46.4 CFM CPU Cooler (NH-U9S chromax.black)'");
$mypccooler1 = mysqli_fetch_all($query, MYSQLI_NUM);

$query = mysqli_query($bd, "SELECT * FROM gpu WHERE name='KFA2 (1-Click OC) GeForce RTX 3060 Ti 8 GB Video Card (36ISL6MD1VQK)'");
$mypcgpu1 = mysqli_fetch_all($query, MYSQLI_NUM);

$query = mysqli_query($bd, "SELECT * FROM memory WHERE name='Corsair Vengeance LPX 16 GB (2 x 8 GB) DDR4-3200 CL16 Memory (CMK16GX4M2E3200C16)'");
$mypcmemory1 = mysqli_fetch_all($query, MYSQLI_NUM);

$query = mysqli_query($bd, "SELECT * FROM motherboard WHERE name='Gigabyte Z590 AORUS ELITE AX ATX LGA1200 Motherboard (Z590 AORUS ELITE AX)'");
$mypcmobo1 = mysqli_fetch_all($query, MYSQLI_NUM);

$query = mysqli_query($bd, "SELECT * FROM psu WHERE name='Thermaltake Toughpower GF1 PE 650 W 80+ Gold Certified Fully Modular ATX Power Supply (PS-TPD-0650FNFAGU-1)'");
$mypcpsu1 = mysqli_fetch_all($query, MYSQLI_NUM);

$query = mysqli_query($bd, "SELECT * FROM storage WHERE name='Seagate FireCuda 530 w/Heatsink 500 GB M.2-2280 PCIe 4.0 X4 NVME Solid State Drive (ZP500GM3A023)'");
$mypcstorage11 = mysqli_fetch_all($query, MYSQLI_NUM);

$query = mysqli_query($bd, "SELECT * FROM storage WHERE name='Western Digital Blue SN570 1 TB M.2-2280 PCIe 3.0 X4 NVME Solid State Drive (WDS100T3B0C)'");
$mypcstorage21 = mysqli_fetch_all($query, MYSQLI_NUM);

$query = mysqli_query($bd, "SELECT * FROM tower WHERE name='Cooler Master MasterBox TD500 Mesh w/ Controller ATX Mid Tower Case (MCB-D500D-KGNN-S01)'");
$mypccase1 = mysqli_fetch_all($query, MYSQLI_NUM);

//PARA EL CHECKER DE COMPATIBILIDADES
$query = mysqli_query($bd, "SELECT * FROM tower");
$tower = mysqli_fetch_all($query, MYSQLI_NUM);

$query = mysqli_query($bd, "SELECT * FROM psu");
$psu = mysqli_fetch_all($query, MYSQLI_NUM);

$query = mysqli_query($bd, "SELECT * FROM motherboard");
$mobo = mysqli_fetch_all($query, MYSQLI_NUM);

$data = [
    "cpusIntel" => $cpusIntel,
    "cpusAMD" => $cpusAMD,
    "gpusNVIDIA" => $gpusNVIDIA,
    "gpusAMD" => $gpusAMD,
    "mobosIntel" => $mobosIntel,
    "mobosAMD" => $mobosAMD,
    "cpus" => $cpu,
    "gpus" => $gpu,
    "mobosSocketIntel" => $moboSocketsIntel,
    "mobosSocketAMD" => $moboSocketsAMD,
    "cpusSockIntel" => $cpuSocketsIntel,
    "cpusSockAMD" => $cpuSocketsAMD,
    "ram" => $ram,
    "storage" => $storage,
    "ramsizecount" => $ramsizecount,
    "storagesizecount" => $storagesizecount,
    "mypccpu1" => $mypccpu1,
    "mypccooler1" => $mypccooler1,
    "mypcgpu1" => $mypcgpu1,
    "mypcmemory1" => $mypcmemory1,
    "mypcmobo1" => $mypcmobo1,
    "mypcpsu1" => $mypcpsu1,
    "mypcstorage11" => $mypcstorage11,
    "mypcstorage21" => $mypcstorage21,
    "mypccase1" => $mypccase1,
    "tower" => $tower,
    "psu" => $psu,
    "mobo" => $mobo
  ];

echo json_encode($data); //codificar en JSON
?>