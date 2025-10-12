const mongoose = require('mongoose');
 
const connectDB = async () => {
 try {
   await mongoose.connect('mongodb+srv://aashiiraj01_db_user:lWuQintWLB7J1lxx@cluster0.czvfjpe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
   console.log('MongoDB Modimal Runnnnnnnnnnnnn!');
 } catch (error) {	
   console.error('MongoDB connection failed:', error.message);
   process.exit(1);
 } 
}; 


module.exports = connectDB;