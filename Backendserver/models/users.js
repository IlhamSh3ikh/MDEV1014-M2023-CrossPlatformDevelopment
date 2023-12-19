const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
    firstName :String,
    middleName: String,
    lastName: String,
    email: String,
    password: String,
})

const usersModel = mongoose.model("users", UsersSchema)

module.exports = usersModel