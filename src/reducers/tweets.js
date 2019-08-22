import { RECEIVE_TWEETS } from '../actions/tweets'

export default function tweets(state = {}}, action) {
    switch (action.type) {
        case RECEIVE_TWEETS:
            ...state,
            ...action.tweets
        default:
            return state
    }
}