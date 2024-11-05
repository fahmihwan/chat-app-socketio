const express = require('express')

const router = express.Router();
const prisma = require("../prisma/client")


const getContactUsers = async (req, res) => {
    const result = await prisma.$queryRaw`select * from users`;
    res.status(200).send({
        data: result,
        success: true,
        message: 'list contact'
    })
}

const messagesUser = async (req, res) => {
    const { senderId, receiveId } = req.params

    const result = await prisma.$queryRaw`select * from message`;

    res.status(200).send({
        data: result,
        success: true,
        message: 'list messages'
    })
}

module.exports = { getContactUsers, messagesUser }