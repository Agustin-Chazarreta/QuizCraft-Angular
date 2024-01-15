const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, unique: true, required: true },
    role: { type: String, default: "user" }
}, {
    collection: 'user'
});

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;
