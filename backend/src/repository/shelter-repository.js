const CrudRepository = require('./crud-repository');
const Shelter = require('../models/shelters'); // Adjust the path if needed

class ShelterRepository extends CrudRepository {
    constructor() {
        super(Shelter);
    }

    // You can add any additional methods specific to Shelter here if needed
}

module.exports = ShelterRepository;
