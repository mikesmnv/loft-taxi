import { GET_ROUTE } from "../actions";

const initialState = {
    route: []
}

export default function getRoute(state = initialState, action) {
    switch(action.type) {
        case GET_ROUTE: {
            return { route: action.payload };
        }
        default:
            return state;
    }
}