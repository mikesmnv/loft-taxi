import { GET_ADDRESS_LIST } from "../actions";

const initialState = {
    addresses: []
}

export default function getAddresses(state = initialState, action) {
    switch(action.type) {
        case GET_ADDRESS_LIST: {
            return { addresses: action.payload };
        }
        default:
            return state;
    }
}