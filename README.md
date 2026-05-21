# Reflection: My Thoughts

## Why is it important to whitelist IP addresses in a real-world production environment?

Whitelisting is important because it limits which clients or servers are allowed to connect to a database. Databases often contain sensitive application data. By restricting access to trusted IP addresses only, developers reduce the chances of unauthorized users attempting to access the database.


---

## What is the purpose of the dotenv package?

The `dotenv` dependency package is used to load environment variables from a `.env` file into a Node.js application. This helps developers keep sensitive information unavailable to others (e.g. database URIs, passwords).
Using environment variables improves security and organization because sensitive credentials are not hardcoded directly into the application.

Example:

```env
MONGO_URI=your_database_connection_string
PORT=3001