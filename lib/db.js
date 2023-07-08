import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect('mongodb+srv://Divya:gxD8ovk3mvTPUsRh@cluster0.mawuoby.mongodb.net/auth-demo')
    

//   MongoClient.connect('mongodb+srv://Divya:C8Fj4bBw8ieCsdPD@cluster0.mawuoby.mongodb.net/auth_demo?retryWrites=true&w=majority',
// { useNewUrlParser: true , useUnifiedTopology: true })
// .then(()=>{ return console.log("Connected to MongoDB Localhost...");
//  })
// .catch(err => console.log("Could not connect",err))
  // console.log(client);
  return client;
}
