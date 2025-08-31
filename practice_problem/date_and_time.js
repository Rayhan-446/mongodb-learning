// 1. Create a Database and Collection

// Let’s create a database called CompanyDB and a collection called employees.

//use companyDB
//db.createCollection("employees")
db.employees.insertMany([
    {
        name:"Rayhan",
        position:"Developer",
        joinedAt:ISODate("2018-03-15")
    },
    {
        name:"Swapnil",
        position:"Researcher",
        joinedAt:ISODate("2020-05-15")
    },
    {
        name:"Shihab",
        position:"Manager",
        joinedAt:ISODate("2013-07-15")
    }

])

//2. Query – Show employees who joined before 10th May 2019

db.employees.find({
    joinedAt:{$lt:ISODate("2019-05-10")}
})

//3. Query – Show employees who joined after 2020

db.employees.find({
    joinedAt:{$gt:ISODate("2020-01-01")}
})