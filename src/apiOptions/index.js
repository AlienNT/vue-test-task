import axios from 'axios'

const routesNames = {
    USERS: 'users',
    POSITIONS: 'positions',
    TOKEN: 'token'
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
    const config = {
        headers: {
            Token: localStorage.getItem('token')
        }
    }

    return await axios({ method, url, data, config })
}
