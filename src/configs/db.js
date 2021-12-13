const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect("mongodb+srv://admin:admin@cluster0.im6oi.mongodb.net/Lybrate-Website-Clone");
}