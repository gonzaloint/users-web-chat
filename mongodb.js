const { MongoClient, ObjectID } = require("mongodb");

const connectionURL="mongodb://127.0.0.1:27017/users-database";
const databaseName="users-database";

/* const anID = new ObjectID();
 * console.log(anID); */

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client)=>{
  if (error) {
    return console.log("unable to connect");
  }
  const db = client.db(databaseName);
  db.collection("users").insertMany([
    {
    name: "Alice",
    random: "4chan user..."
    },
    {
      name: "Bob",
      random: "Python fan..."
    },
    {
      name: "Charlie",
      random: "LoL user..."
    },
    {
      name: "Dan",
      random: "Evelynn Playa..."
    },
  ]);
});
