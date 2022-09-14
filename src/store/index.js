import { createStore } from 'vuex'
import users from './users'
import auth from './auth'
import scrolling from './scrolling'
import positions from './positions'

export default createStore({
    modules: {
        users,
        auth,
        scrolling,
        positions
    }
})
