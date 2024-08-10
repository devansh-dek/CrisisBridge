const OrganizationRepository = require('../repository/organization-repository');
const UserRepository = require('../repository/user-repository.js')
class OrganizationService {
    constructor() {
        this.organizationRepository = new OrganizationRepository();
        this.userRepository = new UserRepository();
    }

    async createOrganization(data) {
        try {

            const response = await this.organizationRepository.create(data);
            const user = await this.userRepository.update(data.admin, { orgId: response.id });

            console.log("user is ", user);
            return response;
        }
        catch (error) {
            throw error;
        }
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
