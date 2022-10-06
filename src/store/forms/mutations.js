export const SET_FORM_FIELDS = (state, fields) => {
    state.formFields = fields
    console.log('SET_FORM_FIELDS', state.formFields)
}

export const SET_FORM_FIELD_BY_NAME = (state, options) => {
    state.formFields[options?.fieldName].value = options.value
    console.log('SET_FORM_FIELD_BY_NAME', state.formFields[options?.fieldName])
}
export const SET_FORM_FIELD_ERRORS = (state, options) => {
    Object.keys(options).forEach(key => {
        state.errors[key] = options[key]
    })
    console.log('state errors', state.errors)
}
export const CLEAR_ERRORS = (state) => {
    Object.keys(state.errors).forEach(key => {
        state.errors[key] = null
    })
    console.log('state errors', state.errors)
}

export const CLEAR_ERRORS_BY_FIELD = (state, fieldName) => {
    state.errors[fieldName] = null
    console.log('state errors', state.errors)
}
