
const bcrypt = require('bcryptjs')
const prisma = require("../../prisma/client")
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    try {
        const user = await prisma.user.findFirst({
            where: {
                email: req.body.username
            },
            select: {
                id: true,
                username: true,
                fullname: true,
                password: true,
            }
        })


        if (!user) {
            return res.status(404).json({
                success: false,
                message: "user not found"
            })
        }

        // compoare password
        const validPassword = await bcrypt.compare(req.body.password, user.password)

        if (!validPassword) {
            return res.status(401).json({
                success: false,
                message: "Invalid password",
            });
        }

        // generate token
        const token = jwt.sign({ id: user.id, }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        })

        const { password, ...userWithoutPassword } = user

        res.status(200).send({
            success: true,
            message: "Login successfully",
            data: {
                user: userWithoutPassword,
                token: token
            }
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }

}


const registrasi = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        const ifUserExists = await prisma.user.findFirst({
            where: {
                username: req.body.username
            }
        })
        if (ifUserExists) {
            throw new Error("user sudah ada")
        }

        const user = await prisma.user.create({
            data: {
                statusenabled: true,
                username: req.body.username,
                fullname: req.body.fullname,
                password: hashedPassword
            },
        })

        res.status(200).send({
            success: true,
            message: "Login successfully",
            data: {
                user: user
            }
        })
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }

}

module.exports = { login, registrasi }