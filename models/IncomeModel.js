const mongoose=require('mongoose');


const IncomeSchema=new mongoose.Schema({
    title:{
    type:String,
    require:true,
    trim:true,
    maxLength:50
    },
    amount :{
        type:Number,
        require:true,
        maxLength:20,
        trim:true
        },
    type:{
            type:String,
            default:"income",
            require:true,
           },
    date:{
            type:Date,
            require:true,
            trim:true
           },
    category :{
            type:String,
            require:true,
            trim:true
            },
    description :{
                type: String,
                require:true,
                maxLength:20,
                trim:true
                },
        

},{timestamps:true})

module.exports = mongoose.model('Income',IncomeSchema)