import { CARD } from "../actions";

const initialState = {
    isHavingCard: false
}

export default function reg(state = initialState, action) {
    switch(action.type) {
        case CARD: {
            return { isHavingCard: true };
        }
        default:
            return state;
    }
}