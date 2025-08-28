// Insert multiple students
db.students.insertMany([
  { name: "Arif", dept: "EEE", marks: 75 },
  { name: "Nabila", dept: "CSE", marks: 92 },
  { name: "Rahim", dept: "BBA", marks: 68 }
]);

// Find CSE students
db.students.find({ dept: "CSE" });

// Update Arif's marks
db.students.updateOne({ name: "Arif" }, { $set: { marks: 80 } });

// Delete Rahim
db.students.deleteOne({ name: "Rahim" });
