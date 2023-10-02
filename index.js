require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión:'));
db.once('open', () => {
  console.log('Conexión exitosa con la base de datos.');
});

const messageSchema = new mongoose.Schema({
    message: String
}, {timestamps: true});
  
const Message = mongoose.model('messages', messageSchema);

app.get('/messages', async (req, res) => {
    try {
        const messages = await Message.find()
        res.status(200).json(messages)    
    } catch (error) {
        res.status(500).json({message: "Imposible devolver los mensajes"})
    }
    
})

app.post('/messages', (req, res) => {
    try {
        const {message} = req.body;
        const newMessage = new Message({message});
        newMessage.save();
        res.status(201).json(newMessage)
    } catch (error) {
        res.status(500).json({message: "Ha ocurrido un error"})
    }
    
})

app.listen(process.env.PORT, () => {
    console.log(`listen on ${process.env.PORT}`)
})