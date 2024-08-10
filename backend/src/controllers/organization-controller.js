const OrganizationService = require('../services/organization-service');
const organizationService = new OrganizationService();

const createOrganization = async (req, res) => {
    try {
        const data = await organizationService.createOrganization(req.body);
        return res.status(201).json({
            data: data,
            success: true,
            message: 'Successfully created organization',
            error: {}
        });
    } catch (error) {
        console.log("Error in OrganizationController.createOrganization:", error.message);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Failed to create organization',
            error: error.message
        });
    }
};

const getOrganization = async (req, res) => {
    try {
        const data = await organizationService.getOrganization(req.params.id);
        return res.status(200).json({
            data: data,
            success: true,
            message: 'Successfully fetched organization',
            error: {}
        });
    } catch (error) {
        console.log("Error in OrganizationController.getOrganization:", error.message);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Failed to fetch organization',
            error: error.message
        });
    }
};

const getAllOrganizations = async (req, res) => {
    try {
        const data = await organizationService.getAllOrganizations();
        return res.status(200).json({
            data: data,
            success: true,
            message: 'Successfully fetched all organizations',
            error: {}
        });
    } catch (error) {
        console.log("Error in OrganizationController.getAllOrganizations:", error.message);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Failed to fetch organizations',
            error: error.message
        });
    }
};

const updateOrganization = async (req, res) => {
    try {
        const data = await organizationService.updateOrganization(req.params.id, req.body);
        return res.status(200).json({
            data: data,
            success: true,
            message: 'Successfully updated organization',
            error: {}
        });
    } catch (error) {
        console.log("Error in OrganizationController.updateOrganization:", error.message);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Failed to update organization',
            error: error.message
        });
    }
};

const deleteOrganization = async (req, res) => {
    try {
        const data = await organizationService.deleteOrganization(req.params.id);
        return res.status(200).json({
            data: data,
            success: true,
            message: 'Successfully deleted organization',
            error: {}
        });
    } catch (error) {
        console.log("Error in OrganizationController.deleteOrganization:", error.message);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Failed to delete organization',
            error: error.message
        });
    }
};

module.exports = {
    createOrganization,
    getOrganization,
    getAllOrganizations,
    updateOrganization,
    deleteOrganization
};
