const express = require('express');
const router = express.Router();
const { UserController, ShelterController } = require('../../controllers');
// authentication
router.post('/signup', UserController.signup);
router.post('/login', UserController.login);
router.post('/isauthenticated', UserController.isAuthenticated);
//Shelter
router.post('/shelter', ShelterController.createShelter);
router.get('/shelter/:id', ShelterController.getShelter);
router.get('/shelter', ShelterController.getAllShelters);
router.put('/shelter/:id', ShelterController.updateShelter);
router.delete('/shelter/:id', ShelterController.deleteShelter);



module.exports = router;