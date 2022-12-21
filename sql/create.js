const createDoctors = `CREATE TABLE doctors (
    id int(11) NOT NULL,
    specialtyId int(11),
    organizationId int(11),
    regionId int(11),
    firstName varchar(128),
    middleName varchar(128),
    lastName varchar(128),
    email varchar(128),
    phone int(11)
  ) ENGINE=MyISAM DEFAULT CHARSET=utf8;`

const createSubSpecialties = `CREATE TABLE subSpecialties (
    id int(11) NOT NULL,
    name varchar(128),
    specialtyId int(11)
  ) ENGINE=MyISAM DEFAULT CHARSET=utf8;`

const createSpecialties = `CREATE TABLE specialties (
    id int(11) NOT NULL,
    name varchar(128)
  ) ENGINE=MyISAM DEFAULT CHARSET=utf8;`

const createOrgs = `CREATE TABLE organizations (
    id int(11) NOT NULL,
    orgTypeId int(11),
    name varchar(128)
  ) ENGINE=MyISAM DEFAULT CHARSET=utf8;`

const createOrgTypes = `CREATE TABLE organizationTypes (
    id int(11) NOT NULL,
    name varchar(128)
  ) ENGINE=MyISAM DEFAULT CHARSET=utf8;`

const createRegions = `CREATE TABLE regions (
    id int(11) NOT NULL,
    name varchar(128)
  ) ENGINE=MyISAM DEFAULT CHARSET=utf8;`

const createAll = [
    createDoctors,
    createSubSpecialties,
    createSpecialties,
    createOrgs,
    createOrgTypes,
    createRegions,
]

export { createAll }
