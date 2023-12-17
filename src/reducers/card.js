import { CARD } from "../actions";

const initialState = {
    isHavingCard: false,
    id: null
}

export default function reg(state = initialState, action) {
    switch(action.type) {
        case CARD: {
            return { isHavingCard: true, id: action.payload };
        }
        default:
            return state;
    }
}