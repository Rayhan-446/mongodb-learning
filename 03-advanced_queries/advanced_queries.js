// Show all students (just to confirm our data)
db.students.find();

// 1️⃣ SORTING
// Sort students by marks (ascending)
db.students.find().sort({ marks: 1 });

// Sort students by marks (descending)
db.students.find().sort({ marks: -1 });

// 2️⃣ PROJECTION
// Show only name and marks, hide _id
db.students.find({}, { name: 1, marks: 1, _id: 0 });

// 3️⃣ LIMIT & SKIP
// Show only top 3 students by marks
db.students.find().sort({ marks: -1 }).limit(3);

// Skip first 2 students and show next 3
db.students.find().sort({ marks: -1 }).skip(2).limit(3);

// 4️⃣ AND Condition
// Students from CSE with marks greater than 80
db.students.find({ dept: "CSE", marks: { $gt: 80 } });

// 5️⃣ OR Condition
// Students from CSE OR with marks less than 70
db.students.find({ $or: [ { dept: "CSE" }, { marks: { $lt: 70 } } ] });

// 6️⃣ Combine AND + OR
// Students from CSE AND (marks > 80 OR marks < 60)
db.students.find({
  dept: "CSE",
  $or: [
    { marks: { $gt: 80 } },
    { marks: { $lt: 60 } }
  ]
});
