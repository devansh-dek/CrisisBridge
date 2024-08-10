const CrudRepository = require('./crud-repository');
const Organization = require('../models/organization');

class OrganizationRepository extends CrudRepository {
    constructor() {
        super(Organization);
    }
}

module.exports = OrganizationRepository;
