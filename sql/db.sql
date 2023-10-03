
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'yourMysqlPassword';

create database cmc_project_db;
use cmc_project_db;

CREATE TABLE members(
  id int unsigned auto_increment primary key,
  email varchar(255) not null,
  password varchar(255) not null,
  name varchar(100) not null,
  phone varchar(45) default null,
  ranking varchar(45) default null,
  created timestamp default current_timestamp,
  updated timestamp default current_timestamp on update current_timestamp
);

create table projects (
  id int unsigned auto_increment primary key,
  task varchar(100) not null,
  years varchar(100) not null,
  business_area varchar(100) not null,
  service varchar(100) not null,
  region varchar(100) not null,
  company_name varchar(100) not null,
  content text default null,
  pm_name varchar(100) default "미정",
  pic varchar(100) default "미정",
  cost bigint default 0,
  remarks text default null,
  status varchar(100) default "미접수",
  created timestamp default current_timestamp,
  updated timestamp default current_timestamp on update current_timestamp
);

create table project_history (
  id int unsigned auto_increment primary key,
  history text not null,
  h_comment text default null,
  created timestamp default current_timestamp,
  updated timestamp default current_timestamp on update current_timestamp,
  projects_id int not null,
  constraint fk_projects_id foreign key (projects_id) references projects(id)
);

create table plan (
  id int unsigned auto_increment primary key,
  years varchar(100) not null unique key,
  sales_plan bigint default 0,
  new_discover int default 0,
  grow_proj int default 0
);

select * from members;
select * from projects;
select * from plan;