1.Create a Database "ShopDB"
2.Create collections: products,employees,business_companies
3.Insert the values as need
4.Now run the querries to find the values 
    i) Find products whose values is greater than or 
       equal to $10000
    ii)Find the products "in stock"
    iii)Find the employees who joined between 2004 to 2011
    iv)Find products in category "Electronics" or "Bags"
    v)Find the products price between $100 to $200



Solution 

db.products.insertMany([
  { name: "Laptop", category: "Electronics", price: 1200, stock: "in stock" },
  { name: "Smartphone", category: "Electronics", price: 800, stock: "in stock" },
  { name: "Backpack", category: "Bags", price: 150, stock: "out of stock" },
  { name: "Shoes", category: "Fashion", price: 90, stock: "in stock" },
  { name: "TV", category: "Electronics", price: 10000, stock: "in stock" }
])

db.employees.insertMany([
  { name: "John", join_year: 2005, dept: "Sales" },
  { name: "Alice", join_year: 2008, dept: "HR" },
  { name: "Mike", join_year: 2015, dept: "Tech" },
  { name: "Sarah", join_year: 2003, dept: "Finance" }
])

i)
db.products.find({ price: { $gte: 10000 } })

ii)
db.products.find({ stock: "in stock" })

iii)
db.employees.find({ join_year: { $gte: 2004, $lte: 2011 } })

iv)
db.products.find({ category: { $in: ["Electronics", "Bags"] } })

v)
db.products.find({ price: { $gte: 100, $lte: 200 } })
