export function setFormFields ({ commit }, fields) {
    commit('SET_FORM_FIELDS', fields)
}

export function setFormFieldByName ({ commit }, options) {
    commit('SET_FORM_FIELD_BY_NAME', options)
}

export function setFormFieldErrors ({ commit }, options) {
    console.log('setFormFieldErrors', options)
    commit('SET_FORM_FIELD_ERRORS', options)
}
export function clearErrors ({ commit }) {
    commit('CLEAR_ERRORS')
}
export function clearErrorsByField ({ commit }, fieldName) {
    commit('CLEAR_ERRORS_BY_FIELD', fieldName)
}
