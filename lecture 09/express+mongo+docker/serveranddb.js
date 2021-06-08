
const express = require('express')
const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

const app = express() // create express app
const port = 3000

const url = 'mongodb://mongo:27017' // connection URL
const client = new MongoClient(url) // create mongodb client
const dbName = 'mydb' // database name
const collectionName = 'test' // collection name

// first route
app.get('/', (req, res) => 
{
    res.send ("Welcome to our page")
})

// second route
app.get('/insert', (req, res) => 
{

  // Use connect method to connect to the server
  client.connect(function(err) 
  {

    assert.equal(null, err)
    console.log('Connected successfully to server')
    const db = client.db(dbName)
    const collection = db.collection(collectionName)
    
    // Some data
    const data = [
        { name: 'Mary', address: 'Beststreet 1, Münster'},
        { name: 'Max', address: 'Beautifulstreet 4, Münster'},
        { name: 'Peter', address: 'Apple st 652'},
        { name: 'Hannah', address: 'Mountain 21'}
    ]

    // Insert data in the collection
    collection.insertMany(data, function(err, result) 
    {
      assert.equal(err, null)
      assert.equal(1, result.result.ok)
      //console.log(result)
      console.log(`Inserted ${result.insertedCount} documents into the collection`)
     
    })

    client.close()

    res.send('Some data has been added to the database!')

  })
})


app.listen(port, () => 
{
  console.log(`App listening at http://localhost:${port}`)
})

