//use companyDB
//Let’s create an employees collection
db.createCollection("employees")
db.employees.insertMany([
  { name: "Alice", dept: "IT", salary: 5000, joinDate: ISODate("2018-03-15") },
  { name: "Bob", dept: "HR", salary: 4000, joinDate: ISODate("2019-05-09") },
  { name: "Charlie", dept: "IT", salary: 6000, joinDate: ISODate("2020-07-01") },
  { name: "David", dept: "Finance", salary: 5500, joinDate: ISODate("2021-01-20") },
  { name: "Eve", dept: "Finance", salary: 7000, joinDate: ISODate("2022-08-10") }
])

//1. $match → Filtering
db.employees.aggregate([
  { $match: { dept: "IT" } }
])

//2. $project → Select/Reshape Fields
db.employees.aggregate([
  { $project: { name: 1, dept: 1, salary: 1, _id: 0 } }
])

//3. $group → Group and Aggregate
db.employees.aggregate([
  { $group: { _id: "$dept", totalSalary: { $sum: "$salary" } } }
])

//4. $avg, $max, $min
db.employees.aggregate([
  { $group: { _id: "$dept", avgSalary: { $avg: "$salary" } } }
])

//5. $sort
db.employees.aggregate([
  { $sort: { salary: -1 } }
])

//6. $limit & $skip
db.employees.aggregate([
  { $sort: { salary: -1 } },
  { $limit: 2 }
])

db.employees.aggregate([
  { $sort: { salary: -1 } },
  { $skip: 1 },
  { $limit: 2 }
])


//7. $unwind (Work with Arrays)
db.employees.updateMany(
  {dept:"IT"},
  {$set:{skills: ["MongoDB", "Node.js", "React"]}}
)
db.employees.aggregate([
  { $unwind: "$skills" }
])


//8. $lookup (Join Collections)
db.departments.insertMany([
  { dept: "IT", head: "Mr. X" },
  { dept: "HR", head: "Ms. Y" },
  { dept: "Finance", head: "Mr. Z" }
])

db.employees.aggregate([
  {
    $lookup: {
      from: "departments",
      localField: "dept",
      foreignField: "dept",
      as: "deptDetails"
    }
  }
])

//⚡ Complex Example – Everything Together

//Find average salary of each department after 2019, sort by highest salary:

db.employees.aggregate([
  { $match: { joinDate: { $gt: ISODate("2019-01-01") } } },
  { $group: { _id: "$dept", avgSalary: { $avg: "$salary" } } },
  { $sort: { avgSalary: -1 } }
])
