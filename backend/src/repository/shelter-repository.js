const CrudRepository = require('./crud-repository');
const Shelter = require('../models/shelters'); // Adjust the path if needed

class ShelterRepository extends CrudRepository {
    constructor() {
        super(Shelter);
    }

    async joinShelterAsOrganization(shelterId, orgId, peopleCount) {
        try {
            const shelter = await Shelter.findById(shelterId);
            if (!shelter) {
                throw new Error('Shelter not found');
            }
            const isAlreadyJoined = shelter.organizations.some(org => org.orgId.toString() === orgId.toString());
            if (isAlreadyJoined) {
                throw new Error('Organization is already joined');
            }

            return await Shelter.findByIdAndUpdate(
                shelterId,
                {
                    $push: {
                        organizations: { orgId, peopleCount }
                    }
                },
                { new: true }
            );
        } catch (error) {
            console.error("Error in ShelterRepository.joinShelterAsOrganization", error);
            throw error;
        }
    }

    async joinShelterAsUser(shelterId, userId) {
        try {
            const shelter = await Shelter.findById(shelterId);
            if (!shelter) {
                throw new Error('Shelter not found');
            }
            if (shelter.users.includes(userId)) {
                throw new Error('User is already joined');
            }

            return await Shelter.findByIdAndUpdate(
                shelterId,
                {
                    $push: {
                        users: userId
                    }
                },
                { new: true }
            );
        } catch (error) {
            console.error("Error in ShelterRepository.joinShelterAsUser", error);
            throw error;
        }
    }

    async quitShelterAsOrganization(shelterId, orgId) {
        try {
            return await Shelter.findByIdAndUpdate(
                shelterId,
                {
                    $pull: {
                        organizations: { orgId }
                    }
                },
                { new: true }
            );
        } catch (error) {
            console.error("Error in ShelterRepository.quitShelterAsOrganization", error);
            throw error;
        }
    }

    async quitShelterAsUser(shelterId, userId) {
        try {
            return await Shelter.findByIdAndUpdate(
                shelterId,
                {
                    $pull: {
                        users: userId
                    }
                },
                { new: true }
            );
        } catch (error) {
            console.error("Error in ShelterRepository.quitShelterAsUser", error);
            throw error;
        }
    }
}

module.exports = ShelterRepository;
