// Create or switch database
use myFirstDB;

// Create collection
db.createCollection("students");

// Insert a document
db.students.insertOne({ name: "Mishu", dept: "CSE", marks: 85 });

// Read documents
db.students.find();
