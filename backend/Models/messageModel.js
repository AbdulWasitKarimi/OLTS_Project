const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    chatId: String ,
    senderId: String,
    text: String
},
{
    timeStamps: true
})

const messageModel = mongoose.model('message', messageSchema)

module.exports = messageModel