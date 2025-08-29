// Show all students (just to confirm our data)
db.students.find();

// 1️⃣ MATCH + GROUP
// Find total and average marks of CSE students
db.students.aggregate([
  { $match: { dept: "CSE" } },
  { $group: { _id: "$dept", totalMarks: { $sum: "$marks" }, avgMarks: { $avg: "$marks" } } }
]);

// 2️⃣ PROJECT + SORT
// Show only name and marks of students with marks >= 50, sorted descending
db.students.aggregate([
  { $match: { marks: { $gte: 50 } } },
  { $project: { name: 1, marks: 1, _id: 0 } },
  { $sort: { marks: -1 } }
]);

// 3️⃣ UNWIND + GROUP
// Suppose each student has skills array: ["MongoDB","Java"]
// Count frequency of each skill
db.students.aggregate([
  { $unwind: "$skills" },
  { $group: { _id: "$skills", count: { $sum: 1 } } },
  { $sort: { count: -1 } }
]);

// 4️⃣ LIMIT + SKIP
// Skip the top student and show next 2 top scoring CSE students
db.students.aggregate([
  { $match: { dept: "CSE" } },
  { $sort: { marks: -1 } },
  { $skip: 1 },
  { $limit: 2 }
]);
