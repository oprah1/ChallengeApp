const express = require("express");
const app = express();
const port = 6000;
require("./database.js");
const CarnetBoard = require ("./models/Carnet.js")
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser());

// création des routes

//ajouter un contact
app.post("/addContact", async (req, res) => {
    const contact = new CarnetBoard();
    contact.incription = req.body.inscription;
    contact.connection = req.body.connection;
    contact.password = req.body.password;
    contact.race = req.body.race;
    contact.famille = req.body.famille;  
    contact.age = req.body.age;
    conntact.nourriture = req.body.nourriture;
    contact.save()
    res.send('contact ajouté');
})

// voir les contacts
app.get("/allContacts", async (req, res) => {
    const VueContact = await CarnetBoard.find({});
    res.json({VueContact});
    res.send('vue des contacts')
})

//voir un contact

app.get("/:showContact_id", (req, res) => {
    const contact = new CarnetBoard();
    CarnetBoard.findOne({_id:req.params.id});
    res.json({contact});
    res.send('vue contact')
})

//modifier un contact

app.put("/:updateContact_id", (req, res) =>{
    const contact = new CarnetBoard();
    CarnetBoard.findOne({_id:req.params.id});
    contact.findOneandUpdate({})
    res.json({contact});
    res.send('mise à jour')

})

//supprimer un contact

app.delete("/:deleteContact_id", (req, res) => {
    const contact = new CarnetBoard();
    CarnetBoard.findOne({_id:req.params.id});
    res.json({contact});
    res.send('supp');

});

app.listen(port, () => console.log(`écoute du port ${port}`))

