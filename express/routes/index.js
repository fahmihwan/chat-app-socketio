const express = require('express')

const router = express.Router();

const ChatRoomController = require('../controllers/ChatRoomController')
const AuthController = require('../controllers/auth/AuthController')

router.post('/login', AuthController.login)
router.post('/register', AuthController.registrasi)

router.get('/all-contact/:senderId', ChatRoomController.getContactUsers)
router.get('/message/:senderId/:receiveId/room', ChatRoomController.getMessageHistory)
router.post('/message', ChatRoomController.storeMessage)

module.exports = router