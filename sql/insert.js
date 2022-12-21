const insertDoctors = `
INSERT INTO doctors 
(id, specialtyId, organizationId, regionId, firstName, middleName, lastName, email, phone) VALUES
(0, 0, 0, 0, 'Max', 'William', 'Scott',  'email@email.com', 79999999),
(1, 0, 0, 0, 'Alex', '', 'Smith',  'email@email.com',  79999999);`

const insertSubSpecialties = `
INSERT INTO subSpecialties 
(id, name, specialtyId) VALUES
(0, 'стоматолог-хирург', 0);`

const insertSpecialties = `
INSERT INTO specialties 
(id, name) VALUES
(0, 'стоматолог');`

const insertOrgs = `
INSERT INTO organizations 
(id, orgTypeId, name) VALUES
(0, 0, 'ММКЦ Коммунарка');`

const insertOrgTypes = `
INSERT INTO organizations 
(id, name) VALUES
(0, 'Больница');`

const insertRegions = `
INSERT INTO regions 
(id, name) VALUES
(0, 'Москва');`

const insertAll = [
    insertDoctors,
    insertSubSpecialties,
    insertSpecialties,
    insertOrgs,
    insertOrgTypes,
    insertRegions,
]

export { insertAll }
