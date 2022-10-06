export const GET_FIELDS = (state) => {
    return state.formFields
}
export const GET_FIELD_BY_NAME = (state) => (fieldName) => {
    return state.formFields[fieldName]
}
export const GET_ERRORS_BY_FIELD_NAME = (state) => (fieldName) => {
    return state.errors[fieldName]
}
