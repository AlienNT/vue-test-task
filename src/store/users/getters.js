import { fieldNames } from '@/apiOptions'

export const GET_USERS = (state) => {
    return state.users.sort((a, b) => {
        const first = a[fieldNames.USER.REGISTRATION_TIMESTAMP]
        const second = b[fieldNames.USER.REGISTRATION_TIMESTAMP]

        return first > second ? a : b
    })
}
export const GET_USER_BY_ID = (state) => (id) => {
    return state.users.find(user => user.id === id)
}
export const GET_ROUTE = (state) => {
    return state.route
}
export const GET_USERS_FIELD_BY_NAME = (state) => (fieldName) => {
    return state.usersData[fieldName]
}
export const GET_LOADING_STATUS = (state) => {
    return state.loading
}
export const GET_CREATED_USER_RESPONSE = (state) => {
    return state.createdUserResponse
}
