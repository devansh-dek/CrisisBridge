const CrudRepository = require('./crud-repository');
const Shelter = require('../models/shelters'); // Adjust the path if needed

class ShelterRepository extends CrudRepository {
    constructor() {
        super(Shelter);
    }
    async joinShelterAsOrganization(shelterId, orgId, peopleCount) {
        return await Shelter.findByIdAndUpdate(
            shelterId,
            {
                $push: {
                    organizations: { orgId, peopleCount }
                }
            },
            { new: true }
        );
    }

    async joinShelterAsUser(shelterId, userId) {
        return await Shelter.findByIdAndUpdate(
            shelterId,
            {
                $push: {
                    users: userId
                }
            },
            { new: true }
        );
    }
}

module.exports = ShelterRepository;
