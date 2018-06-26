import {
    TICKET_PAGE_UNLOADED,
    GET_TICKET
} from '../constants/actionTypes';

export default (state = {}, action) => {
    switch (action.type) {
        case GET_TICKET:
            return {
                ...state,
                tickets: action.payload
            };
        case TICKET_PAGE_UNLOADED:
            return {};
        default:
            return state;
    }
};
