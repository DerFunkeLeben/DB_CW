const updateExample = `
    UPDATE doctors 
    SET 
        phone = +7998254,
        email = test@example.com 
    WHERE doctors.id = 1;
`
const updateID = `
    UPDATE doctors 
    LEFT JOIN regions 
    ON ( regions.id = doctors.regionId ) 
    SET 
        doctors.regionId = 777,
        regions.id = 777
    WHERE regions.name = 'Республика Коми';
`

const deleteExample = `DELETE FROM doctors WHERE doctors.id = 5;`

const deleteCommunarka = `
    DELETE FROM doctors
    WHERE doctors.id IN ( 
        SELECT doctors.id
        FROM doctors
        INNER JOIN organizations 
        ON ( doctors.organizationId = organizations.id )
        WHERE organizations.name = 'ММКЦ Коммунарка'
    );
`

export { updateExample, updateID, deleteExample, deleteCommunarka }
