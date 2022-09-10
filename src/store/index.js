import { createStore } from 'vuex'
import users from './users'
import auth from './auth'

export default createStore({
    modules: {
        users,
        auth
    }
})
