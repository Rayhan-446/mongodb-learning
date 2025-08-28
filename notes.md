# MongoDB Learning Notes

## Step 1: Basics

- `use myFirstDB` → creates/switches database
- `db.createCollection("students")` → creates collection
- `insertOne({...})` → insert a single document
- `insertMany([{...}, {...}])` → insert multiple docs
- `find()` → shows all documents
- `find().pretty()` → formatted output


## Step 2: CRUD
- `insertMany()` → insert multiple documents
- `find({})` → query documents
- `updateOne()` / `updateMany()` → update docs
- `deleteOne()` / `deleteMany()` → delete docs
