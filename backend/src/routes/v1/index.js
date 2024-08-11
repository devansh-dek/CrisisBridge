const express = require('express');
const router = express.Router();
const { UserController, ShelterController, OrganizationController } = require('../../controllers');
// authentication
router.post('/signup', UserController.signup);
router.post('/login', UserController.login);
router.post('/isauthenticated', UserController.isAuthenticated);
router.post('/getbyemail', UserController.getById);
//Shelter
router.post('/shelter', ShelterController.createShelter);
router.get('/shelter/:id', ShelterController.getShelter);
router.get('/shelter', ShelterController.getAllShelters);
router.put('/shelter/:id', ShelterController.updateShelter);
router.delete('/shelter/:id', ShelterController.deleteShelter);
router.post('/shelter/join-as-org', ShelterController.joinShelterAsOrganization);
router.post('/shelter/join-as-user', ShelterController.joinShelterAsUser);
router.post('/shelter/quit-organization', ShelterController.quitShelterAsOrganization);
router.post('/shelter/quit-user', ShelterController.quitShelterAsUser);

//Organization 
router.post('/organization', OrganizationController.createOrganization);
router.get('/organization/:id', OrganizationController.getOrganization);
router.get('/organization', OrganizationController.getAllOrganizations);
router.put('/organization/:id', OrganizationController.updateOrganization);
router.delete('/organization/:id', OrganizationController.deleteOrganization);

module.exports = router;