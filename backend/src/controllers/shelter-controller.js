const ShelterService = require('../services/shelter-service');
const shelterService = new ShelterService();

const createShelter = async (req, res) => {
    try {
        const shelterData = {
            name: req.body.name,
            description: req.body.description,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            capacity: req.body.capacity,
            disasterType: req.body.disasterType
        };
        const shelter = await shelterService.createShelter(shelterData);
        return res.status(201).json({
            data: shelter,
            success: true,
            message: 'Shelter created successfully',
            error: {}
        });
    } catch (error) {
        console.error("Error in ShelterController.createShelter:", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Failed to create shelter',
            error: error.message
        });
    }
};

const getShelter = async (req, res) => {
    try {
        const shelter = await shelterService.getShelter(req.params.id);
        if (!shelter) {
            return res.status(404).json({
                data: {},
                success: false,
                message: 'Shelter not found',
                error: {}
            });
        }
        return res.status(200).json({
            data: shelter,
            success: true,
            message: 'Shelter retrieved successfully',
            error: {}
        });
    } catch (error) {
        console.error("Error in ShelterController.getShelter:", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Failed to retrieve shelter',
            error: error.message
        });
    }
};

const getAllShelters = async (req, res) => {
    try {
        const shelters = await shelterService.getAllShelters();
        return res.status(200).json({
            data: shelters,
            success: true,
            message: 'Shelters retrieved successfully',
            error: {}
        });
    } catch (error) {
        console.error("Error in ShelterController.getAllShelters:", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Failed to retrieve shelters',
            error: error.message
        });
    }
};

const updateShelter = async (req, res) => {
    try {
        const shelterData = req.body;
        console.log("req body is ", req.params.id)
        const shelter = await shelterService.updateShelter((req.params.id), shelterData);
        if (!shelter) {
            return res.status(404).json({
                data: {},
                success: false,
                message: 'Shelter not found',
                error: {}
            });
        }
        return res.status(200).json({
            data: shelter,
            success: true,
            message: 'Shelter updated successfully',
            error: {}
        });
    } catch (error) {
        console.error("Error in ShelterController.updateShelter:", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Failed to update shelter',
            error: error.message
        });
    }
};

const deleteShelter = async (req, res) => {
    try {
        const shelter = await shelterService.deleteShelter(req.params.id);
        if (!shelter) {
            return res.status(404).json({
                data: {},
                success: false,
                message: 'Shelter not found',
                error: {}
            });
        }
        return res.status(200).json({
            data: {},
            success: true,
            message: 'Shelter deleted successfully',
            error: {}
        });
    } catch (error) {
        console.error("Error in ShelterController.deleteShelter:", error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Failed to delete shelter',
            error: error.message
        });
    }
};

module.exports = {
    createShelter,
    getShelter,
    getAllShelters,
    updateShelter,
    deleteShelter
};
