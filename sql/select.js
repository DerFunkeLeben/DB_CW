const selectAllDocs = `SELECT * FROM doctors`
const selectAllSubSpecs = `SELECT * FROM subSpecialties`
const selectAllSpecs = `SELECT * FROM specialties`
const selectAllOrgs = `SELECT * FROM organizations`
const selectAllOrgTypes = `SELECT * FROM organizationTypes`
const selectAllRegions = `SELECT * FROM regions`

const selectBySpecialty = specialty => `
    SELECT 
        doctors.firstName AS name,
        doctors.email AS email,
        subSpecialties.name AS specialty
    FROM doctors
    INNER JOIN subSpecialties 
    ON ( doctors.specialtyId = subSpecialties.id )
    WHERE subSpecialties.name = '${specialty}'
    AND doctors.email != ''
`

const selectOnExperience = exp => `
    SELECT 
        doctors.firstName AS name,
        doctors.email AS email,
        doctors.experience AS experience
    FROM doctors
    WHERE doctors.experience > '${exp}'
    AND doctors.email != ''
    ORDER BY experience DESC
`

const selectPolyclinicMSK = () => `
    SELECT 
        doctors.firstName AS name,
        organizations.name AS orgName,
        regions.name AS region
    FROM doctors

    RIGHT JOIN organizations
    ON doctors.organizationId = organizations.id

    RIGHT JOIN organizationTypes
    ON organizations.orgTypeId = organizationTypes.id

    RIGHT JOIN regions
    ON regions.id = doctors.regionId

    WHERE regions.name = 'Москва'
    AND organizationTypes.name = 'Поликлиника'
`

const selectOrgsFilteredBySpec = specialty => `
    SELECT organizations.name AS orgName FROM organizations

    WHERE organizations.id NOT IN (
        SELECT 
            organizations.id AS orgId
        FROM organizations

        INNER JOIN doctors
        ON doctors.organizationId = organizations.id

        INNER JOIN subSpecialties
        ON doctors.specialtyId = subSpecialties.id
        
        WHERE subSpecialties.name = '${specialty}'
        GROUP BY orgId
    )
`

const selectOnRegion = region => `
    SELECT  
        doctors.firstName AS name,
        regions.name AS region
    FROM doctors
    RIGHT JOIN regions
    ON regions.id = doctors.regionId

    WHERE regions.name = '${region}'
`

export {
    selectAllDocs,
    selectAllSubSpecs,
    selectAllSpecs,
    selectAllOrgs,
    selectAllOrgTypes,
    selectAllRegions,
    selectBySpecialty,
    selectOnExperience,
    selectPolyclinicMSK,
    selectOrgsFilteredBySpec,
    selectOnRegion,
}
