# MongoDB Learning Notes

## Step 1: Basics
- `use myFirstDB` → create/switch database
- `db.createCollection("students")` → create collection
- `db.students.insertOne({...})` → insert one document

## Step 2: CRUD
- `insertMany()` → insert multiple documents
- `find({})` → query documents
- `updateOne()` / `updateMany()` → update docs
- `deleteOne()` / `deleteMany()` → delete docs
