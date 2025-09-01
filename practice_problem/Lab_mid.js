db.movies.insertMany([
  {_id:1,title:"fargo",year:1996,rating:8.2},
  {_id:2,title:"iron_man",year:1995,rating:6.2},
  {_id:3,title:"monte_carlo",year:1997,rating:7.2},
  {_id:4,title:"superman",year:1999,rating:8.2},
  {_id:5,title:"avatar",year:2001,rating:8.9},
  {_id:6,title:"dart",year:2005,rating:8.5}
])

db.actors.insertMany([
  {_id: 1, name: "Robert Jr"},
  {_id: 2, name: "Partho Mohanto"},
  {_id: 3, name: "Tom Cruise"},
  {_id: 4, name: "Rayhan Rimon"}
])

db.acts.insertMany([
  {actorId: 1, movieId: 1}, 
  {actorId: 2, movieId: 2}, 
  {actorId: 3, movieId: 3}, 
  {actorId: 4, movieId: 4}  
])

db.directs.insertMany([
  {director: "Md Jubaer", movieId: 1},
  {director: "Abu Rayhan", movieId: 2},
  {director: "Ibrahim Hridoy", movieId: 3},
  {director: "Hanson", movieId: 4}
])

//Q1
db.directs.aggregate([
  { $match: { director: "Hanson" } },
  {
    $lookup: {
      from: "movies",
      localField: "movieId",
      foreignField: "_id",
      as: "movieInfo"
    }
  },
  { $unwind: "$movieInfo" },
  { $match: { "movieInfo.year": { $gt: 1997 } } },
  { $project: { _id: 0, "movieInfo.title": 1, "movieInfo.year": 1 } }
])

//Q2
db.movies.aggregate([
  {
    $match: { rating: 8.2 } 
  },
  {
    $count: "totalMovies" 
  }
])

//Q3
db.movies.aggregate([
  { $match: { title: "fargo" } },
  {
    $lookup: {
      from: "acts",
      localField: "_id",
      foreignField: "movieId",
      as: "actsInfo"
    }
  },
  { $unwind: "$actsInfo" },
  {
    $lookup: {
      from: "actors",
      localField: "actsInfo.actorId",
      foreignField: "_id",
      as: "actorInfo"
    }
  },
  { $unwind: "$actorInfo" },
  {
    $lookup: {
      from: "directs",
      localField: "_id",
      foreignField: "movieId",
      as: "directorInfo"
    }
  },
  { $unwind: "$directorInfo" },
  {
    $project: {
      _id: 0,
      movie: "$title",
      actor: "$actorInfo.name",
      director: "$directorInfo.director"
    }
  }
])

//Q4
db.movies.find(
  {rating:{$lt:9,$gt:5}}
)

//Q5

db.acts.aggregate([
  {
    $lookup:{
      from:"movies",
      localField:"movieId",
      foreignField:"_id",
      as:"movieInfo"
    }
  },

  {$match:{"movieInfo.rating":{$gt:5}}},
  {
    $lookup:{
      from:"actors",
      localField:"actorId",
      foreignField:"_id",
      as:"actorInfo"
    }
  },

  {$project:{_id:0,actor:"$actorInfo.name",title:"$movieInfo.title",rating:"$movieInfo.rating"}}
])
