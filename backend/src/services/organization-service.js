const OrganizationRepository = require('../repository/organization-repository');

class OrganizationService {
    constructor() {
        this.organizationRepository = new OrganizationRepository();
    }

    async createOrganization(data) {
        return await this.organizationRepository.create(data);
    }

    async getOrganization(id) {
        return await this.organizationRepository.get(id);
    }

    async getAllOrganizations() {
        return await this.organizationRepository.getAll();
    }

    async updateOrganization(id, data) {
        return await this.organizationRepository.update(id, data);
    }

    async deleteOrganization(id) {
        return await this.organizationRepository.destroy(id);
    }
}

module.exports = OrganizationService;
