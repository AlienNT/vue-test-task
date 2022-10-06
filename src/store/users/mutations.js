export const SET_USERS_DATA = (state, data) => {
    state.usersData = data
}
export const SET_USERS = (state, data) => {
    if (state.users?.length) {
        state.users = state.users.concat(data)
    } else {
        state.users = data
    }
}
export const RESET_USERS = (state) => {
    state.users = []
}

export const SET_ROUTE = (state, data) => {
    state.route = data
}

export const SET_LOADING_STATUS = (state, data) => {
    state.loading = data
}

export const SET_CREATED_USER_RESPONSE = (state, data) => {
    state.createdUserResponse = data
}
