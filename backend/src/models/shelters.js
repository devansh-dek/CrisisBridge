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
    },
    organizations: [
        {
            orgId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Organization'
            },
            peopleCount: {
                type: Number,
                required: true
            }
        }
    ],
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});
shelterSchema.pre('remove', async function (next) {
    try {
        await Organization.updateMany(
            { shelters: this._id },
            { $pull: { shelters: this._id } }
        );
        await User.updateMany(
            { shelters: this._id },
            { $pull: { shelters: this._id } }
        );
        next();
    } catch (error) {
        next(error);
    }
});
// Create and export the model
const Shelter = mongoose.model('Shelter', shelterSchema);
module.exports = Shelter;
