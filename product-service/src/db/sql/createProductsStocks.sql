CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE products (
   id uuid PRIMARY KEY DEFAULT uuid_generate_v4 (),
   title VARCHAR NOT NULL,
   description VARCHAR NOT NULL,
   price INTEGER
);

create table stocks (
	count integer,
	product_id uuid,
    FOREIGN KEY("product_id") REFERENCES "products"("id")
);

DELETE FROM stocks;
DELETE FROM products;

DO $$
DECLARE productID1 uuid;
DECLARE productID2 uuid;
BEGIN
	INSERT INTO products (title, description, price) VALUES ('Practical MongoDB', '1nd Edition', 30) RETURNING id into productID1;
	INSERT INTO products (title, description, price) VALUES ('MongoDB in Action', '2nd Edition', 40) RETURNING id into productID2;
	INSERT INTO stocks(product_id, "count") values(productID1, 1);
	INSERT INTO stocks(product_id, "count") values(productID2, 2);
END $$;
