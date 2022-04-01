const mongoose = require("mongoose")

const PirateSchema = new mongoose.Schema({
    name : {
	    type: String,
		required: [true, "name is required"]
    },		
    image : {
        type: String,
        required: [true, "image is required"]
    },
    chests : {
        type: Number,
        required: [true, "chests is required"]
    },
    phrase : {
        type: String,
        required: [true, "catch is required"]
    },
    position : {
        type: String,
        required: [true, "position is required"]
    },
    leg : {
        type : Boolean,
    },
    patch : {
        type : Boolean,
    },
    hand : {
        type : Boolean,
    }
	}, {timestamps : true})

	module.exports.pirate = mongoose.model('pirate', PirateSchema) 