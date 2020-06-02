create table user (
id INT AUTO_INCREMENT,
name VARCHAR(256),
password VARCHAR(256),
refresh_token VARCHAR(256)
);

create table user_roles (
user_id INT,
roles VARCHAR(256)
);

