import { REGISTER } from "../actions";

const initialState = {
    isRegistrated: false
}

export default function reg(state = initialState, action) {
    switch(action.type) {
        case REGISTER: {
            return { isRegistrated: true };
        }
        default:
            return state;
    }
}