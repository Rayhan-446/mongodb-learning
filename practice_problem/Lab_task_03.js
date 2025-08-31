/*1. Create a database ‘HotelDb’
2. Create the collections : hotel
room
booking
guest

3.Run the queries:
i) Find all hotels in London and NY
ii) Find all ‘family’ rooms with a price below $400 per night
iii) Find all rooms occupied by ‘ABC hotel’
iv) Find the guests who lived in ‘NY’ and booked room in ‘Cbc hotel’ after 20/8/24 */

Solution
//use HotelDb

// Hotel Collection
db.hotel.insertMany([
  { _id: 1, name: "ABC Hotel", city: "London" },
  { _id: 2, name: "Cbc Hotel", city: "NY" },
  { _id: 3, name: "XYZ Hotel", city: "Paris" }
])

// Room Collection
db.room.insertMany([
  { _id: 101, hotelId: 1, type: "family", price: 350 },
  { _id: 102, hotelId: 1, type: "single", price: 200 },
  { _id: 103, hotelId: 2, type: "family", price: 450 },
  { _id: 104, hotelId: 2, type: "family", price: 380 },
  { _id: 105, hotelId: 3, type: "single", price: 220 }
])

// Guest Collection
db.guest.insertMany([
  { _id: 201, name: "John", city: "NY" },
  { _id: 202, name: "Alice", city: "London" },
  { _id: 203, name: "Bob", city: "NY" }
])

// Booking Collection
db.booking.insertMany([
  { guestId: 201, hotelId: 2, roomId: 104, bookedOn: ISODate("2024-08-21") },
  { guestId: 202, hotelId: 1, roomId: 101, bookedOn: ISODate("2024-08-10") },
  { guestId: 203, hotelId: 2, roomId: 104, bookedOn: ISODate("2024-08-25") }
])


//i) Find all hotels in London and NY
db.hotel.find(
  { city: { $in: ["London", "NY"] } }
)

//ii) Find all ‘family’ rooms with a price below $400 per night
db.room.find(
  { type: "family", price: { $lt: 400 } }
)

//iii) Find all rooms occupied by ‘ABC Hotel’
db.room.aggregate([
  {
    $lookup: {
      from: "hotel",
      localField: "hotelId",
      foreignField: "_id",
      as: "hotelInfo"
    }
  },
  { $unwind: "$hotelInfo" },
  { $match: { "hotelInfo.name": "ABC Hotel" } },
  { $project: { _id: 1, type: 1, price: 1, "hotelInfo.name": 1 } }
])

//iv) Find guests who lived in ‘NY’ and booked room in ‘Cbc Hotel’ after 20/8/24
db.booking.aggregate([
  {
    $lookup: {
      from: "guest",
      localField: "guestId",
      foreignField: "_id",
      as: "guestInfo"
    }
  },
  { $unwind: "$guestInfo" },
  {
    $lookup: {
      from: "hotel",
      localField: "hotelId",
      foreignField: "_id",
      as: "hotelInfo"
    }
  },
  { $unwind: "$hotelInfo" },
  {
    $match: {
      "guestInfo.city": "NY",
      "hotelInfo.name": "Cbc Hotel",
      bookedOn: { $gt: ISODate("2024-08-20") }
    }
  },
  { $project: { guestName: "$guestInfo.name", hotelName: "$hotelInfo.name", bookedOn: 1, _id: 0 } }
])

