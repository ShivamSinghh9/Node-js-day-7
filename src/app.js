const express = require("express")
const noteModel = require("./models/notes.model")
const app = express()
app.use(express.json())


//- CREATE API
app.post("/notes", async(req,res)=>{
    const {title, description} = req.body
    const note = await noteModel.create({
        title, description
    })
    res.status(201).json({
        message:"Note Created Successfully",
        note
    })
})


//- FETCH API
app.get("/notes", async(req, res)=>{
    const notes = await noteModel.find()
    res.status(200).json({
        message:"Note Featched Successfully",
        notes
    })
})


//- DELETE API
app.delete("/notes/:id",async (req,res)=>{
    const id = req.params.id
    await noteModel.findByIdAndDelete(id)
    res.status(200).json({
        message:"Note deleted successfully"
    })
})


//- PATCH or UPDATE
app.patch("/notes/:id", async(req, res)=>{
    const id=req.params.id
    const {description} = req.body
    await noteModel.findByIdAndUpdate(id,{description})
    res.status(200).json({
        message:"Note Updated Successfully"
    })
})

module.exports = app

//mongodb+srv://shivam132e_db_user:AP5NOH366LXxVlew@cluster0.xfuxhum.mongodb.net/
//mongodb+srv://shivam132e_db_user:WaU7HCvJyU61ssUh@cluster0.xfuxhum.mongodb.net/