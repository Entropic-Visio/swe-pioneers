// Modules
const express = require("express"); // Import the Express framework to help with creating the server and routing.
const router = express.Router() // Create a new router object to define routes.
const mysql = require('mysql2'); // Import the MySQL module to communicate with MySQL databases.
const db = require('../services/db.js'); // Import the custom database module that likely handles database connection and queries.

// Define a GET route for the root URL ("/").
router.get("/", async (req, res) => {
  try {
    // Asynchronously query the database to select all entries from the `country` table.
    const [rows, fields] = await db.query("SELECT * FROM `country`");
    console.log(`/cities: ${rows.length} rows`);
    return res.render('country');
  } catch (error) {
    // If an error occurs during the database query or rendering, log the error to the console.
    console.error(error);
    // Send a 500 Internal Server Error status code and render a generic "500" error page.
    return res.status(500).render("500");
  }


});
// Export the router so it can be used in other parts of the application, typically the main server file.
module.exports = router;
