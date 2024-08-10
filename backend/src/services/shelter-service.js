const ShelterRepository = require('../repository/shelter-repository');

class ShelterService {
    constructor() {
        this.shelterRepo = new ShelterRepository();
    }

    async createShelter(data) {
        try {
            return await this.shelterRepo.create(data);
        } catch (error) {
            console.error("Error in ShelterService.createShelter", error);
            throw error;
        }
    }

    async getShelter(id) {
        try {
            return await this.shelterRepo.get(id);
        } catch (error) {
            console.error("Error in ShelterService.getShelter", error);
            throw error;
        }
    }

    async getAllShelters() {
        try {
            return await this.shelterRepo.getAll();
        } catch (error) {
            console.error("Error in ShelterService.getAllShelters", error);
            throw error;
        }
    }

    async updateShelter(id, data) {
        try {
            return await this.shelterRepo.update(id, data);
        } catch (error) {
            console.error("Error in ShelterService.updateShelter", error);
            throw error;
        }
    }

    async deleteShelter(id) {
        try {
            return await this.shelterRepo.destroy(id);
        } catch (error) {
            console.error("Error in ShelterService.deleteShelter", error);
            throw error;
        }
    }
}

module.exports = ShelterService;
