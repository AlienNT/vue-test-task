export const fields = {
    NAME: 'name',
    EMAIL: 'email',
    POSITION_ID: 'position_id',
    PHONE: 'phone',
    PHOTO: 'photo'
}
export const errorMessages = {
    [fields.NAME]: {
        REQUIRE: 'field is required',
        MIN_LENGTH: (length) => `field length must be > ${length}`,
        MAX_LENGTH: (length) => `field length must be < ${length}`
    },
    [fields.EMAIL]: {
        REQUIRE: 'field is required',
        FORMAT: 'field must be email format'
    },
    [fields.POSITION_ID]: {
        REQUIRE: 'field is required'
    },
    [fields.PHONE]: {
        REQUIRE: 'field is required',
        FORMAT: 'field must be +380 format'
    },
    [fields.PHOTO]: {
        REQUIRE: 'field is required',
        EXTENSION: (extensions) => `field must be ${extensions.join('/ ')} format`,
        SIZE: (size) => `field must be < ${size}`,
        NATURAL_SIZE: (size) => `file must be > ${size?.width} x ${size?.height} px`
    }
}
