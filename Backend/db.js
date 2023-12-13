const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://90MinWear:Lmessi10@cluster0.bhx9ty8.mongodb.net/90MinWear?retryWrites=true&w=majority';

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log('Connected to MongoDB');

    const fetched_data = await mongoose.connection.db.collection('items');
    const data = await fetched_data.find({}).toArray();
    global.items = data;

    const Category = await mongoose.connection.db.collection('Category');
    const catData = await Category.find({}).toArray();
    global.Category = catData;
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the process if there's an error connecting to MongoDB
  }
};

connectToMongoDB();

module.exports = connectToMongoDB;

