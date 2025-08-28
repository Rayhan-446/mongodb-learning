// Insert more students
db.students.insertMany([
  { name: "Tonmoy", dept: "CSE", marks: 81 },
  { name: "Jahan", dept: "Law", marks: 88 },
  { name: "Mehedi", dept: "EEE", marks: 59 }
]);

// READ: Find all CSE students
db.students.find({ dept: "CSE" });

// READ: Find students with marks greater than 80
db.students.find({ marks: { $gt: 80 } });

// UPDATE: Increase Tonmoy's marks to 90
db.students.updateOne(
  { name: "Tonmoy" },
  { $set: { marks: 90 } }
);

// UPDATE: Increase all CSE students’ marks by +5
db.students.updateMany(
  { dept: "CSE" },
  { $inc: { marks: 5 } }
);

// DELETE: Remove student Rahim
db.students.deleteOne({ name: "Rahim" });

// DELETE: Remove all EEE students
db.students.deleteMany({ dept: "EEE" });
