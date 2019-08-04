use Air_Liquide	
Go
Create table Employees (
id int IDENTITY(1,1) PRIMARY KEY,
userName varchar(300) not null unique ,
email varchar(300) not null  unique ,
[activation] bit DEFAULT 1 not null
)
Go
Create table Views (
id int IDENTITY(1,1) PRIMARY KEY,
name varchar(300) not null unique ,
unique(name)
)
Go 
Create table [Permissions](
employeeId int ,
viewId int ,
FOREIGN KEY(employeeId) REFERENCES Employees(id),
FOREIGN KEY(viewId) REFERENCES Views(id),
CONSTRAINT PK_Permission PRIMARY KEY (employeeId,viewId)
)
Go 