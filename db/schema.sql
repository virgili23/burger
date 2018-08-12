USE heroku_4db331236ab990c;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id) 
);

/*
CREATE TABLE todos (
	id INT AUTO_INCREMENT NOT NULL,
    description VARCHAR(255),
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY(id)
);
*/

/* database is burgers_db */