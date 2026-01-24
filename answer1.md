 Database Relationships

 What is a Database Relationship?

A database relationship explains how data stored in one table is connected to data stored in another table. These connections are created using keys, mainly Primary Keys and Foreign Keys. Relationships help databases avoid duplicate data, maintain accuracy, and represent real‑world scenarios efficiently.

In relational databases, relationships make it possible to combine data from multiple tables and perform meaningful queries.

Types of Database Relationships

Relational databases mainly support three types of relationships:

1. One‑to‑One (1:1)
2. One‑to‑Many (1:N)
3. Many‑to‑Many (M:N)

Each relationship type is commonly used in e‑commerce systems to model business logic.

 1. One‑to‑One Relationship (1:1)

 Description

In a one‑to‑one relationship, each record in the first table is linked to only one record in the second table, and vice versa. This type of relationship is often used when data needs to be separated for security or better organization.

 E‑commerce Example

Customer  Customer_Details

* Each customer has exactly one detailed profile
* Each profile belongs to a single customer

 Example Tables

* customers(customer_id, email, password)
* customer_details(detail_id, customer_id, address, phone)

The customer_id in customer_details acts as a foreign key.

---

 2. One‑to‑Many Relationship (1:N)
 Description

A one‑to‑many relationship exists when one record in a table can be related to multiple records in another table, but those records relate back to only one parent record.

This is the most frequently used relationship in databases.

E‑commerce Example

Customer ↔ Orders

* One customer can place multiple orders
* Each order is placed by only one customer

 Example Tables

* customers(customer_id, name)
* orders(order_id, customer_id, order_date)

Here, customer_id in the orders table is a foreign key referencing the customer.

---

 3. Many‑to‑Many Relationship (M:N)
 Description

In a many‑to‑many relationship, multiple records in one table can be associated with multiple records in another table. Since relational databases do not support this directly, an intermediate (junction) table is used.

 E‑commerce Example

Orders ↔ Products

* An order can include multiple products
* A product can appear in multiple orders

Example Tables

* orders(order_id, order_date)
* products(product_id, product_name, price)
* order_items(order_id, product_id, quantity)

The order_items table connects orders and products using foreign keys.


 Summary of Relationships

| Relationship Type | Meaning                     | E‑commerce Use Case |
| ----------------- | --------------------------- | ------------------- |
| One‑to‑One        | One record linked to one    | Customer ↔ Profile  |
| One‑to‑Many       | One record linked to many   | Customer ↔ Orders   |
| Many‑to‑Many      | Many records linked to many | Orders ↔ Products   |




