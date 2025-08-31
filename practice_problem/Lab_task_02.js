/*1. Create a database ‘BookStore’
2. Create collections: Books
Members
Borrow
Librarian
3.Now run the queries to find values:

● Find members id who joined after 24th feb and borrow
minimum three books

● Find the total fines collected from overdue books

● List all the available copies of books of ‘history’ genre

● Find the librarian names who completes working hour regularly*/


Solution 

//use BookStore

// Books Collection
db.Books.insertMany([
  { _id: 1, title: "World History", genre: "history", copies: 5 },
  { _id: 2, title: "Modern Science", genre: "science", copies: 3 },
  { _id: 3, title: "Ancient History", genre: "history", copies: 2 }
])

// Members Collection
db.Members.insertMany([
  { _id: 101, name: "Alice", joinedAt: ISODate("2024-03-01") },
  { _id: 102, name: "Bob", joinedAt: ISODate("2024-02-10") },
  { _id: 103, name: "Charlie", joinedAt: ISODate("2024-04-15") }
])

// Borrow Collection
db.Borrow.insertMany([
  { memberId: 101, bookId: 1, borrowDate: ISODate("2024-03-05"), returnDate: ISODate("2024-03-20"), fine: 0 },
  { memberId: 101, bookId: 2, borrowDate: ISODate("2024-03-10"), returnDate: ISODate("2024-03-25"), fine: 50 },
  { memberId: 101, bookId: 3, borrowDate: ISODate("2024-03-15"), returnDate: ISODate("2024-03-30"), fine: 0 },
  { memberId: 103, bookId: 1, borrowDate: ISODate("2024-04-20"), returnDate: ISODate("2024-05-05"), fine: 100 }
])

// Librarian Collection
db.Librarian.insertMany([
  { _id: 201, name: "Mr. Smith", workingHours: 8, requiredHours: 8 },
  { _id: 202, name: "Mrs. Johnson", workingHours: 6, requiredHours: 8 },
  { _id: 203, name: "Mr. Lee", workingHours: 8, requiredHours: 8 }
])


//Query_01
db.Borrow.aggregate([
  {
    $lookup: {
      from: "Members",
      localField: "memberId",
      foreignField: "_id",
      as: "memberInfo"
    }
  },
  { $unwind: "$memberInfo" },
  {
    $match: {
      "memberInfo.joinedAt": { $gt: ISODate("2024-02-24") }
    }
  },
  {
    $group: {
      _id: "$memberId",
      totalBorrowed: { $sum: 1 }
    }
  },
  { $match: { totalBorrowed: { $gte: 3 } } }
])


//Query_02
db.Borrow.aggregate([
  {
    $group: {
      _id: null,
      totalFines: { $sum: "$fine" }
    }
  }
])


//Query_3
db.Books.find(
  { genre: "history" },
  { title: 1, copies: 1, _id: 0 }
)


//Query_4
db.Librarian.find(
  { $expr: { $eq: ["$workingHours", "$requiredHours"] } },
  { name: 1, _id: 0 }
)

