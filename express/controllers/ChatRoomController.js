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

const getMessagesUser = async (req, res) => {
    const { senderId, receiveId } = req.params

    const result = await prisma.$queryRaw`select * from message`;

    res.status(200).send({
        data: result,
        success: true,
        message: 'list messages'
    })
}

const storeMessage = async (req, res) => {
    try {
        const sentMessage = await prisma.message.create({
            data: {
                sender_id: Number(req.body?.sender_id),
                receive_id: Number(req.body?.receive_id),
                content: req.body.content,
            }
        })


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



module.exports = { getContactUsers, getMessagesUser, storeMessage }