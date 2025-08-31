// <!-- 🔹 Practice Problems: Steps 1–3
// Step 1: Basics Practice

// Create a database called companyDB.

// Create a collection called employees.

// Insert 5 employees with fields:

// name, dept, salary, joiningYear

// Display all employees in pretty format.

// ✅ Tip: Use insertOne() or insertMany(), find().pretty()

// Step 2: CRUD Practice

// Insert 3 more employees.

// Find all employees in the IT department.

// Increase salary by 10% for employees who joined before 2022.

// Delete an employee with salary less than 30,000.

// Update an employee’s department from HR → Admin.

// ✅ Tip:

// $inc → increment numeric fields

// $set → modify specific fields

// deleteOne() / deleteMany() → remove documents

// Step 3: Advanced Queries Practice

// Find top 3 highest-paid employees.

// Show only name and salary for employees in IT with salary > 50,000.

// Skip first 2 employees and show the next 3 (sorted by salary descending).

// Find employees in IT OR HR departments.

// Find employees who are in IT AND (salary > 60,000 OR joiningYear < 2021).

// ✅ Tip:

// .sort({salary:-1}) → descending sort

// .limit(n) and .skip(n) → pagination

// $or → OR condition

// { dept: "IT", salary: {$gt:60000} } → AND condition -->




Solution
// ================================
// Step 1: Basics
// ================================

// 1️⃣ Create / Switch database
//use companyDB;

// 2️⃣ Create collection
db.createCollection("employees");

// 3️⃣ Insert 5 employees
db.employees.insertMany([
  { name: "Alice", dept: "IT", salary: 60000, joiningYear: 2020 },
  { name: "Bob", dept: "HR", salary: 45000, joiningYear: 2021 },
  { name: "Charlie", dept: "Finance", salary: 55000, joiningYear: 2019 },
  { name: "David", dept: "IT", salary: 70000, joiningYear: 2022 },
  { name: "Eve", dept: "HR", salary: 40000, joiningYear: 2020 }
]);

// 4️⃣ Display all employees (pretty)
db.employees.find().pretty();



// ================================
// Step 2: CRUD
// ================================

// 1️⃣ Insert 3 more employees
db.employees.insertMany([
  { name: "Fahim", dept: "IT", salary: 50000, joiningYear: 2023 },
  { name: "Gina", dept: "Finance", salary: 48000, joiningYear: 2022 },
  { name: "Hassan", dept: "HR", salary: 35000, joiningYear: 2021 }
]);

// 2️⃣ Find all employees in IT department
db.employees.find({ dept: "IT" });

// 3️⃣ Increase salary by 10% for employees who joined before 2022
db.employees.updateMany(
  { joiningYear: { $lt: 2022 } },
  { $mul: { salary: 1.1 } } // multiply salary by 1.1 (10% increase)
);

// 4️⃣ Delete an employee with salary less than 30,000
db.employees.deleteMany({ salary: { $lt: 30000 } });

// 5️⃣ Update department from HR → Admin
db.employees.updateMany(
  { dept: "HR" },
  { $set: { dept: "Admin" } }
);



// ================================
// Step 3: Advanced Queries
// ================================

// 1️⃣ Top 3 highest-paid employees
db.employees.find().sort({ salary: -1 }).limit(3);

// 2️⃣ Show only name & salary for IT employees with salary > 50,000
db.employees.find(
  { dept: "IT", salary: { $gt: 50000 } },
  { name: 1, salary: 1, _id: 0 }
);

// 3️⃣ Skip first 2 employees and show next 3 (sorted by salary descending)
db.employees.find().sort({ salary: -1 }).skip(2).limit(3);

// 4️⃣ Employees in IT OR Admin departments
db.employees.find({
  $or: [
    { dept: "IT" },
    { dept: "Admin" }
  ]
});

// 5️⃣ Employees in IT AND (salary > 60,000 OR joiningYear < 2021)
db.employees.find({
  dept: "IT",
  $or: [
    { salary: { $gt: 60000 } },
    { joiningYear: { $lt: 2021 } }
  ]
});
