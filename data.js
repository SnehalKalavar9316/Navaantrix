const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const PORT = process.env.PORT(3000);
const MONGODB_URI= "mongodb://localhost:";

app.use(express.json());

MongoClient.connect(MONGODB_URI,{useNewUrlParser:true,useUnifiedTopology:true},(errclient)=>{
    if(err){
        console.error('Error connecting to MongoDB:',err);
        return;
    }
    const db = client.db('student');
    const collection=db.collection('mycollection');


    //Create
    app.post('/create',async(req,res)=>{
        const{name,age}=req.body;
        const result=awaitcollection.insertOne({name,age});
        res.json(result.ops[0]);
    });

    //Read
    app.get('/read',async(req,res)=>{
        const result = await
        collection.findOne({_id:objectId(req.params.id)});
        res.json(result);
});

//Update
app.put('/update/:id',async(req,res)=>{
    const{name,age}= req.body;
    const result=await
    collection.updateOne({_id:objectId(req.oarams.id)},{$set:{name,age}});
    res.json(result);
});

//Delete
app.delete('/delete/:id',async(req,res)=>{
    const result = await
    collection.deleteOne({_id:objectId(req.params.id)});
    res.json(result);
});

app.listen(PORT,()=>
{
    console.log("Server running on ${PORT)")
});
});