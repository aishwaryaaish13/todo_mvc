Database Fundamentals – Conceptual Understanding
---------------------------------------------------
1. Why is db.json not suitable as a database for real projects?

Using a db.json file works only for learning or very small demo applications. It is not suitable for real-world projects because of several limitations:

Limitations of File-Based Storage
------------------------------------
Performance Issues
Every read or write operation requires reading the entire file into memory.
As data grows, response time becomes slow.
Not optimized for frequent or concurrent queries.
Scalability Issues
Cannot efficiently handle large amounts of data.
No support for indexing, query optimization, or distributed storage.
Difficult to scale when users or data increase.
Concurrency Problems
Multiple users accessing the file at the same time can cause data corruption.
No proper locking or transaction handling.
Reliability Issues
If the server crashes while writing, data may be lost or corrupted.
No built-in backup, recovery, or rollback mechanism.
Security Limitations
No authentication, authorization, or encryption by default.
Anyone with file access can read or modify the data.
Because of these issues, db.json is only suitable for prototypes, testing, or assignments, not production systems.

2. What are the ideal characteristics of a database system (apart from just storage)?

A good database system does much more than store data. Ideal characteristics include:
Performance
---------------------
Fast data retrieval and storage.
Uses indexing, caching, and query optimization to improve speed.
Concurrency
Supports multiple users accessing and modifying data at the same time.
Prevents conflicts using locks and transactions.
Reliability
Ensures data is not lost during crashes or failures.
Provides backup and recovery mechanisms.
Data Integrity
Maintains accuracy and consistency of data.
Enforces rules like primary keys, foreign keys, and constraints.
Scalability
Can handle increasing data volume and user load.
Supports vertical scaling (better hardware) and horizontal scaling (more servers).
Fault Tolerance
Continues working even if part of the system fails.
Uses replication and redundancy to prevent downtime.

3. How many types of databases are there? What are their use cases or applications?

Databases are broadly classified into two main types:

1. Relational Databases (SQL)

Description
Data is stored in tables (rows and columns).
Uses structured schema and SQL for querying.
Strong support for relationships and transactions.

Examples

MySQL
PostgreSQL
Oracle
SQL Server
Use Cases
Banking systems
E-commerce applications
ERP and CRM systems
Applications requiring strong data consistency and relationships
Why Use Them
ACID compliance
Strong data integrity
Complex queries and joins

2. Non-Relational Databases (NoSQL)

Description

Data stored in flexible formats like documents, key-value, graphs, or columns.
Schema-less or dynamic schema.
Designed for large-scale and high-speed applications.

Examples
---------------------
MongoDB (Document-based)
Redis (Key-value)
Cassandra (Column-based)
Neo4j (Graph-based)

Use Cases
-------------------
Real-time applications
Social media platforms
Chat applications
Big data and analytics
IoT systems

Why Use Them
------------------
High scalability
Flexible data structurec
Faster performance for large distributed systems