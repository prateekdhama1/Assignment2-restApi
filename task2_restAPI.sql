create table EmpRecord(

	EmpCode integer,
	Name varchar(50),
	Designation varchar(50),
	Email varchar(50),
	Location varchar(50)
);

insert into EmpRecord values(123,'Kartik','Developer','k@gmail.com','Bangalore');
insert into EmpRecord values(456,'Paras','SDE3','p@gmail.com','Gurgaon');
insert into EmpRecord values(789,'hrithik','Manager','h@gmail.com','Mumbai');

select * from EmpRecord;
