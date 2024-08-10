const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the Shelter schema
const shelterSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    disasterType: {
        type: String,
        required: true,
        enum: ['Hurricane', 'Earthquake', 'Flood', 'Wildfire', 'Tornado', 'Other'] // Add other types if needed
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Create and export the model
const Shelter = mongoose.model('Shelter', shelterSchema);
module.exports = Shelter;
