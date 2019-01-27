use AngularJSBasic
go
create table Employees(
	Id int identity(1,1) primary key,
	Name nvarchar(50),
	Gender nvarchar(20),
	Salary int,
	Birthday datetime
	)
go

insert into Employees values(N'Cindy Smith',N'Female',45000000,'12/02/1990')
insert into Employees values(N'Samatha Lync',N'Female',40000000,'08/02/1992')
insert into Employees values(N'John Sam',N'Male',25000000,'12/10/1995')
insert into Employees values(N'Jane Juliet',N'Female',3000000,'03/25/1990')
insert into Employees values(N'Abbey Kerlin',N'Male',35000000,'12/27/1991')
insert into Employees values(N'Zach Coby',N'Male',50000000,'01/12/1989')

select * from Employees

truncate table Employees