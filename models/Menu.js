const mongoose = require("mongoose");

const menuItems = new mongoose.Schema({
        name: {
            type:String,
            require:true
        },
        price:{
            type:Number,
            require:true 
        },

        taste:{
            type:String,
            require:true,
            enum: ["sweet","spicy", "sour"]
        },
        is_drink:{
            type:Boolean,
            default:false,
        },
        ingredients:{
            type:Array,
            default:[],
        },
        num_sales:{
            type:Number,
            default:0
        }
    }
)

const MenuItems = mongoose.model('MenuItems',menuItems);

module.exports = MenuItems;