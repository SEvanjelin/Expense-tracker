const express = require('express');
const cors = require('cors');
const { db } = require('./db/db'); // Importing db function from db.js
require('dotenv').config();
const {readdirSync}= require('fs')
const app = express();
const PORT = process.env.PORT || 5000; // Set default port as 5000 if PORT environment variable is not provided

//middlewares
app.use(express.json());
app.use(cors());


//routes
readdirSync('./routes').map((route)=>app.use('/api/v1',require('./routes/' + route )))

app.get('/', (req, res) => {
    res.send('Hello World');
});

const server = () => {
    db()
        .then(() => {
            app.listen(PORT, () => {
                console.log('listening to port:', PORT);
            });
        })
        .catch((error) => {
            console.error('DB CONNECTION ERROR:', error);
        });
};

server();







/*const express=require('express')
const cors= require('cors');
const app=express()
require('dotenv').config()
const PORT=process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Hello World')
})

const server=()=>{
    db()
app.listen(PORT,()=>{
    console.log('listening to port:',PORT)
})
    
}

server()
*/