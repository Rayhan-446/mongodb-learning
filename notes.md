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
