import mongoose from 'mongoose';
 
const connectDB = async () => {
 try {
   await mongoose.connect('mongodb+srv://aashiiraj01_db_user:WyWxbx1KIJbtSSlW@cluster0.ci5gqg7.mongodb.net/?appName=Cluster0');
   console.log('MongoDB Connected Successfully!');
 } catch (error) {	
   console.error('MongoDB connection failed:', error.message);
   process.exit(1);
 } 
}; 

export default connectDB;

// aashiiraj01_db_user
// WyWxbx1KIJbtSSlW

// mongodb+srv://aashiiraj01_db_user:WyWxbx1KIJbtSSlW@cluster0.ci5gqg7.mongodb.net/?appName=Cluster0