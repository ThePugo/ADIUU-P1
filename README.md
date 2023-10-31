# ADIUU-P1
Práctica 1 ADIIU
Autores: Sasha Cammarata San Segundo y José Enrique Sánchez Weiss

# Tutorial
1- Abrir XAMPP e iniciar Apache y MySQL

2- Ir a localhost/phpmyadmin y crear una base de datos llamada "pcparts"

3-<br>
  Opción a- Importar en la base de datos creada el archivo "pcparts.sql" para añadir ya directamente la base de datos con todos los inserts
  Opción b- 1- Descargar los archivos .csv desde https://www.kaggle.com/datasets/rohitmit98/pc-parts-by-type/data?select=CPU.csv
            2- Introducir en la base de datos el código incluído en el archivo "bd.sql" (cambiando la ruta en la que están los archivos .csv guardados para los "LOAD DATA INFILE...")

4- Descargar la carpeta "P1" e introducirla en C:/xampp/htdocs.

5- Buscar en cualquier navegador: https://localhost/P1/ y ya estarías en la página web :)

# Observaciones
La información se adquiere a través de solicitudes al servidor interno, las cuales son procesadas por el archivo PHP que administra la parte back-end del sistema.
Se ha empleado la biblioteca Highcharts (disponible en https://www.highcharts.com/) para la creación de gráficos y mapas.
  Bootstrap (disponible en https://getbootstrap.com/) ha sido utilizado para diseñar la interfaz del usuario.
  JQuery (disponible en https://jquery.com/) ha sido empleado para agilizar el desarrollo del código JavaScript.
  
Los datasets para la base de datos se han extraído del siguiente enlace de Kaggle:<br>
https://www.kaggle.com/datasets/rohitmit98/pc-parts-by-type/data?select=CPU.csv
