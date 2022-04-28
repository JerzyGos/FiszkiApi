console.log('HELLO 🚀')

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://mongodb1247:mongodb1247@cluster0.zztka.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")


const Schema = mongoose.Schema;
const userSchema = {
    PL: String,
    ANG: String

}

const User = mongoose.model("User", userSchema)

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})




app.post("/", function(req, res) {
    let newNote = new User({
        PL: req.body.title,
        ANG: req.body.content

    });
    newNote.save();
    res.redirect('/');
})

app.listen(443, function() {
    console.log("server is runing");
})


// new User(newUser).save((err, user) => {
//     if (err) {
//         throw err;
//     }
//     if (user) {
//         console.log('User was created successfully...')
//     }
// })



// const result = require('autoprefixer/data/prefixes');
// const { MongoClient, ServerApiVersion } = require("mongodb");

// async function main() {

//     const uri = "mongodb+srv://mongodb1247:mongodb1247@cluster0.zztka.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";




//     const client = new MongoClient(uri);

//     await client.connect();
//     try {
//         await client.connect();

//         await findOneListingByName(client, "kamil");
//         // await listDatabases(client);
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }





// main().catch(console.error);


// async function createListing(client, newListing) {
//     const result = await client.db("Przedmiot").collection("Egzamin").insertOne(newListing);


//     console.log(`Udłąo się id: ${result.insertedId}`)

// }

// async function listDatabases(client) {

//     const databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach(db => {
//         console.log(`- ${db.name}`);


//     })
// }

// async function findOneListingByName(client, nameOfListing) {
//     const result = await client.db("Przedmiot").collection("Egzamin").findOne({ name: nameOfListing });
//     if (result) {
//         console.log(`Found a listong in the collection with the bame '${nameOfListing}'`);
//         console.log(result)




//     } else
//         console.log(`No listing found`)

// }

// *//