const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

const url = 'mongodb://localhost:27017' // connection URL

const client = new MongoClient(url) // mongodb client

const dbName = 'mydb' // database name

const collectionName = 'test' // collection name

// Use connect method to connect to the server
client.connect(function(err) 
{
  assert.equal(null, err)

  console.log('Connected successfully to server')

  const db = client.db(dbName)
  /*
    // create a collection 
    db.createCollection(collectionName, function(err, res) 
    {
        if (err) throw err
        console.log("Collection created!")
    })
  */
  const collection = db.collection(collectionName)

  const data = [
    { name: 'John', address: 'Highway 71'},
    { name: 'Peter', address: 'Lowstreet 4'},
    { name: 'Amy', address: 'Apple st 652'},
    { name: 'Hannah', address: 'Mountain 21'},
    { name: 'Michael', address: 'Valley 345'},
    { name: 'Sandy', address: 'Ocean blvd 2'},
    { name: 'Betty', address: 'Green Grass 1'},
    { name: 'Richard', address: 'Sky st 331'},
    { name: 'Susan', address: 'One way 98'},
    { name: 'Vicky', address: 'Yellow Garden 2'},
    { name: 'Ben', address: 'Park Lane 38'},
    { name: 'William', address: 'Central st 954'},
    { name: 'Chuck', address: 'Main Road 989'},
    { name: 'Viola', address: 'Sideway 1633'}
  ]

  // insert new documents in my collection
  insertDocuments(db, collection, data, function()
  {
    console.log("Closing the client...")
    client.close()
  })

  // count the total number of elements in my collection
  collection.count(function (err, count) {
    if (err) throw err;
    
    console.log('Total Rows: ' + count);
  })

})


const insertDocuments = function(db, collection, data, callback) 
{
    // Insert some documents
    collection.insertMany(data, function(err, result) 
    {
      assert.equal(err, null)
      assert.equal(1, result.result.ok)
      //console.log(result)
      console.log(`Inserted ${result.insertedCount} documents into the collection`)
      callback(result)
    })
}