Connect to your/a database on line 270 

Table schema used for the code:

![schema](https://user-images.githubusercontent.com/63368449/130864143-0aa5b735-0e8d-4955-ab93-55035d0b51c9.PNG)

create table Customers (id INT UNSIGNED primary key not null AUTO_INCREMENT, firstName VARCHAR(50) not null, lastName VARCHAR(50) not null, dateOfBirth DATE not null, email VARCHAR(50) not null, streetAddress VARCHAR(50) not null, memberSince DATE not null);
