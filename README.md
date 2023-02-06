# frondend 
- instala las dependendencias con npm i 
-corre la app con ng serve --o
- inicia sesión con el siguiente usuario administrador 

"correo" : "admin@gmail.com",
    "contraseña" : 1234,

# backend 
- instala todas las dependencias con npm i
- monta la base de datos en un motor , el script se encuentra en la carpeta backend llamado cajeropoli.sql
- una vez montada la base de datos corre el motor luego ve a la siguiente ruta db -> config.js en la cual tendremos la conexión en de la base de datos reemplazar los datos que sean necesarios y poner los de el servidor en el cual fue montado el script previamente mencionado 
- corre la la api con node index 

# descripcion :
- un pequeño cajero que permite realizar transacciones de retiro y consignacion , tiene un sistema de autenticación seperado por roles algunas vistas están restringidas según los permisos de el usuario 
