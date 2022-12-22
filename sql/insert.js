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
(0, 'стоматолог'),
(1, 'терапевт'),
(2, 'кардиолог'),
(3, 'невролог'),
(4, 'офтальмолог'),
(5, 'хирург'),
(6, 'педиатр');`

const insertOrgs = `
INSERT INTO organizations 
(id, orgTypeId, name) VALUES
(0, 0, 'ММКЦ Коммунарка');`

const insertOrgTypes = `
INSERT INTO organizations 
(id, name) VALUES
(0, 'Больница'),
(0, 'Поликлиника'),
(0, 'Травмпункт'),
(0, 'Частная клиника');`

const insertRegions = `
INSERT INTO regions 
(id, name) VALUES
(0, 'Москва'),
(1, 'Санкт-Петербург'),
(2, 'Красноярский край'),
(3, 'Республика Дагестан'),
(4, 'Республика Саха'),
(5, 'Республика Коми'),
(6, 'Хабаровская область');`

const insertAll = [
    insertDoctors,
    insertSubSpecialties,
    insertSpecialties,
    insertOrgs,
    insertOrgTypes,
    insertRegions,
]

export { insertAll }
