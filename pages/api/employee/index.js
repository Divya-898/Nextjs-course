
import Employee from "../../../model/emp";
import connectMongo from "../../../database/conn";


export default async function handler(req, res){
  connectMongo().catch(error => res.json({ error: "Connection Failed...!"}))

  // only post method is accepted
  if(req.method === 'POST'){
     if(!req.body) return res.status(404).json({ error: "Don't have form data...!"});
      const { name, email } = req.body;

      // check duplicate users
      // const checkexisting = await Users.findOne({ email });
      // if(checkexisting) return res.status(422).json({ message: "User Already Exists...!"});

      // hash password
    const t=  Employee.create({ name, email})
    console.log(t)

  } else{
      res.status(500).json({ message: "HTTP method not valid only POST Accepted"})
  }

}