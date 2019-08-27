import { RECEIVE_USERS } from '../actions/users'

export default function tweets(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            ...state,
            ...action.users
        default:
            return state
    }
}