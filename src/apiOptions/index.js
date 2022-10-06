import axios from 'axios'

const routesNames = {
    USERS: 'users',
    POSITIONS: 'positions',
    TOKEN: 'token'
}

export const fieldNames = {
    USERS_DATA: {
        COUNT: 'count',
        LINKS: 'links',
        NEXT_URL: 'next_url',
        PREV_URL: 'prev_url',
        PAGE: 'page',
        SUCCESS: 'success',
        TOTAL_PAGES: 'total_pages',
        TOTAL_USERS: 'total_users',
        USERS: 'users'
    },
    USER: {
        EMAIL: 'email',
        ID: 'id',
        NAME: 'name',
        PHONE: 'phone',
        PHOTO: 'photo',
        POSITION: 'position',
        POSITION_ID: 'position_id',
        REGISTRATION_TIMESTAMP: 'registration_timestamp'

    },
    POSITION: {
        NAME: 'name'
    }
}
export const host = 'https://frontend-test-assignment-api.abz.agency/api/v1'

export const routes = {
    USERS: getRoute(routesNames.USERS),
    POSITIONS: getRoute(routesNames.POSITIONS),
    TOKEN: getRoute(routesNames.TOKEN)
}

function getRoute (routeName) {
    return host + '/' + routeName
}

export async function apiRequest (method, url, data) {
    const headers = {
        Token: await getToken()
    }

    return await axios({
        method,
        url,
        data,
        headers
    })
}

async function getToken () {
    return new Promise((resolve) => {
        resolve(localStorage.getItem('Token'))
    })
}
