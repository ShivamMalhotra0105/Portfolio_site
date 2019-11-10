// File Name: JAVASCRIPT DOCUMENT
// Author Name: Shivam Malhotra
//Website Name: Portfolio Site
//File Description: Connection To The Database



const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findorcreate = require('mongoose-findorcreate');
const passportLocalMongoose = require('passport-local-mongoose');


const userSchema = new Schema({role: {}});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findorcreate);

const user = mongoose.model('User', userSchema);

module.exports = user;