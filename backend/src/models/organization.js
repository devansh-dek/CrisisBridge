const mongoose = require('mongoose');

const OrganizationSchema = new mongoose.Schema({
    orgname: {
        type: String,
        required: true
    },
    orgdesc: {
        type: String,
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    orgtype: {
        type: String,
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    shelters: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Shelter'
        }
    ]
}, { timestamps: true });

const Organization = mongoose.model('Organization', OrganizationSchema);

module.exports = Organization;
