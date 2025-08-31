# MongoDB Learning Notes

## Step 1: Basics

- `use myFirstDB` → creates/switches database
- `db.createCollection("students")` → creates collection
- `insertOne({...})` → insert a single document
- `insertMany([{...}, {...}])` → insert multiple docs
- `find()` → shows all documents
- `find().pretty()` → formatted output


## Step 2: CRUD

- **Insert**
  - `insertOne()` → add one doc
  - `insertMany()` → add multiple docs

- **Read**
  - `find({})` → query docs
  - `{ marks: { $gt: 80 } }` → filter with operators

- **Update**
  - `updateOne({filter}, { $set: {...} })`
  - `updateMany({filter}, { $inc: {...} })`

- **Delete**
  - `deleteOne({filter})`
  - `deleteMany({filter})`

## Step 3: Advanced Queries

### Sorting
- `{ marks: 1 }` → ascending
- `{ marks: -1 }` → descending

### Projection (select fields)
- `{ name: 1, marks: 1, _id: 0 }` → show only name & marks

### Limit & Skip
- `.limit(n)` → show first n results
- `.skip(n)` → skip first n results

### Conditions
- **AND** → `{ dept: "CSE", marks: { $gt: 80 } }`
- **OR** → `{ $or: [ { dept: "CSE" }, { marks: { $lt: 70 } } ] }`
- **Combine** → mix AND + OR in one query


## Step 4: Aggregation Framework

Aggregation allows **data analysis, transformation, and summarization** using a pipeline of stages.  

### Pipeline Stages
- `$match` → filter documents (like WHERE)
- `$group` → group documents & aggregate (SUM, AVG, COUNT)
- `$project` → select or transform fields
- `$sort` → sort documents
- `$limit` → show first n
- `$skip` → skip first n
- `$unwind` → flatten arrays

---

### Most important stages:

$match → filter documents (like find)

$project → show/hide/reshape fields

$group → group data and do calculations (sum, avg, count, etc.)

$sort → sort documents

$limit / $skip → limit or skip results

$lookup → join with another collection

$unwind → break arrays into individual docs

### ✨ Key Operators in Aggregation

$sum, $avg, $max, $min → math

$first, $last → pick first/last value in group

$push, $addToSet → put values in array

$toUpper, $substr → string operations

$year, $month, $dayOfMonth → date operations

### 📝 Summary

Aggregation = pipeline of stages

Common stages: $match, $project, $group, $sort, $limit, $lookup, $unwind

It’s like combining SQL’s WHERE + GROUP BY + JOIN + ORDER BY in one pipeline.

---
