const express = require('express')

const router = express.Router();
const prisma = require("../prisma/client")


const getContactUsers = async (req, res) => {
    const { senderId } = req.params

    const result = await prisma.$queryRaw`select id,fullname, username from users WHERE id != ${Number(senderId)}`;
    res.status(200).send({
        data: result,
        success: true,
        message: 'list contact'
    })
}

const getMessageHistory = async (req, res) => {
    const { senderId, receiveId } = req.params
    // const result = await prisma.$queryRaw`select * from messages ms
    //  where ms.sender_id = ${Number(senderId)} and ms.receive_id =${Number(receiveId)}`;
    const result = await prisma.$queryRaw`select ms.* from messages ms
     where ms.sender_id in (${Number(senderId)},${Number(receiveId)}) 
     and ms.receive_id in (${Number(senderId)},${Number(receiveId)})`

    res.status(200).send({
        data: result,
        success: true,
        message: 'list messages'
    })
}


// const getHistoryOfMessages = async (params) => {

//     const result = await prisma.$queryRaw`select ms.* from messages ms
//                     inner join users usr_send on ms.sender_id = usr_send.id
//                     inner join users usr_receive on ms.receive_id = usr_receive.id
//                     where ms.sender_id = Number() and ms.receive_id =2`
// }

const storeMessage = async (req, res) => {
    try {
        const sentMessage = await prisma.message.create({
            data: {
                sender_id: Number(req.body?.sender_id),
                receive_id: Number(req.body?.receive_id),
                content: req.body.content,
            }
        })

        // req.io.emit("new_message", { content: '"wkwkkwkw"' })
        // console.log(cek);

        res.status(201).send({
            success: true,
            message: "message sent successfully",
            data: sentMessage
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            success: false,
            message: error.message,
        });

    }
}



module.exports = { getContactUsers, getMessageHistory, storeMessage }