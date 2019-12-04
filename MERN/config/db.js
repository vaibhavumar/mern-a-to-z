const mongoose = require('mongoose');
const config = require('config');
const dbURI = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(
            dbURI, {
                useNewUrlParser : true,
                useUnifiedTopology: true,
            }
        );
        console.log('MongoDB is Connected...');
    } catch (err) {
        console.error(err.message);
        console.error("Exiting App");
        process.exit(1);
    }
};

module.exports = connectDB;