const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Db CONNECTED');
    } catch (error) {
        throw new Error(error); // Throw error instead of just logging
    }
};

module.exports = { db };



/*const mongoose = require('mongoose');

const db= async()=>{
    try{
        mongoose.set('strictQuery',false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Db CONNECTED')
    }
    catch(error){
        console.log('DB CONNECTION ERROR')
    }
}
module.exports={db}*/