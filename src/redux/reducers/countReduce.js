import { INCREMENT } from "../constants/type";
import { DECREMENT } from "../constants/type";
import { REFRESH } from "../constants/type";

let initialState = 0;

export default function CountReduce(state=initialState, action) {
    
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        case REFRESH:
            return state = 0;
        default:
            return state;
    }

}