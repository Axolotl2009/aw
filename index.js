// Import MongoClient
const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'mydatabase';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  if(err) {
    console.error('Error occurred while connecting to MongoDB', err);
    return;
  }
  
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  
  // Get the collection
  const collection = db.collection('users');

  // Insert two documents using insertOne
  collection.insertOne({ name: "John", age: 30 }, function(err, result) {
    if(err) {
      console.error('Error occurred while inserting document:', err);
      return;
    }
    console.log("Inserted 1 document into the collection");
  });

  collection.insertOne({ name: "Jane", age: 25 }, function(err, result) {
    if(err) {
      console.error('Error occurred while inserting document:', err);
      return;
    }
    console.log("Inserted 1 document into the collection");

    // Insert ten documents using insertMany
    const documents = [
      { name: "Person3", age: 27 },
      { name: "Person4", age: 27 },
      { name: "Person5", age: 27 },
      { name: "Person6", age: 27 },
      { name: "Person7", age: 27 },
      { name: "Person8", age: 30 },
      { name: "Person9", age: 35 },
      { name: "Person10", age: 40 },
      { name: "Person11", age: 45 },
      { name: "Person12", age: 50 }
    ];

    collection.insertMany(documents, function(err, result) {
      if(err) {
        console.error('Error occurred while inserting documents:', err);
        return;
      }
      console.log("Inserted " + result.insertedCount + " documents into the collection");
      
      // Close the connection after inserting all documents
      client.close();
    });
  });
});
// Import MongoClient
const MongoClient = require('mongodb').MongoClient;

// Connection URL

// Use connect method to connect to the Server
client.connect(function(err) {
  if(err) {
    console.error('Error occurred while connecting to MongoDB', err);
    return;
  }
  
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  
  // Get the collection
  const collection = db.collection('users');

  // Find all 27-year-old documents but limit to the first 3
  collection.find({ age: 27 }).limit(3).toArray(function(err, documents) {
    if(err) {
      console.error('Error occurred while finding documents:', err);
      return;
    }
    
    console.log("Found " + documents.length + " 27-year-old documents:");
    console.log(documents);

    // Close the connection after fetching documents
    client.close();
  });
});
// Import MongoClient
const MongoClient = require('mongodb').MongoClient;

// Connection URL


// Use connect method to connect to the Server
client.connect(function(err) {
  if(err) {
    console.error('Error occurred while connecting to MongoDB', err);
    return;
  }
  
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  
  // Get the collection
  const collection = db.collection('users');

  // Find the first four 27-year-old documents
  collection.find({ age: 27 }).limit(4).toArray(function(err, documents) {
    if(err) {
      console.error('Error occurred while finding documents:', err);
      return;
    }
    
    console.log("Found " + documents.length + " 27-year-old documents:");
    console.log(documents);

    // Update the names and ages of the first four documents
    for (let i = 0; i < documents.length; i++) {
      collection.updateOne(
        { _id: documents[i]._id },
        { $set: { name: "UpdatedName" + i, age: 27 + i } },
        function(err, result) {
          if (err) {
            console.error('Error occurred while updating document:', err);
            return;
          }
          console.log("Updated document:", result);
        }
      );
    }

    // Close the connection after updating documents
    client.close();
  });
});
// Import MongoClient
const MongoClient = require('mongodb').MongoClient;

// Connection URL


// Use connect method to connect to the Server
client.connect(function(err) {
  if(err) {
    console.error('Error occurred while connecting to MongoDB', err);
    return;
  }
  
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  
  // Get the collection
  const collection = db.collection('users');

  // Update all documents to add 10 years to their age
  collection.updateMany({}, { $inc: { age: 10 } }, function(err, result) {
    if(err) {
      console.error('Error occurred while updating documents:', err);
      return;
    }
    
    console.log("Updated " + result.modifiedCount + " documents to add 10 years to their age");

    // Delete documents with age 41
    collection.deleteMany({ age: 41 }, function(err, result) {
      if(err) {
        console.error('Error occurred while deleting documents:', err);
        return;
      }
      
      console.log("Deleted " + result.deletedCount + " documents with age 41");

      // Close the connection after updating and deleting documents
      client.close();
    });
  });
});
