// Switch (or create) a database
use myFirstDB;

// Create a collection named "students"
db.createCollection("students");

// Insert one document
db.students.insertOne({ name: "Mishu", dept: "CSE", marks: 85 });

// Insert multiple documents
db.students.insertMany([
  { name: "Arif", dept: "EEE", marks: 75 },
  { name: "Nabila", dept: "CSE", marks: 92 },
  { name: "Rahim", dept: "BBA", marks: 68 }
]);

// Read all documents from students collection
db.students.find();

// Read with pretty format (easier to read)
db.students.find().pretty();
