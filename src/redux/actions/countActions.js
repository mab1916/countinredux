import { INCREMENT } from "../constants/type";
import { DECREMENT } from "../constants/type";
import { REFRESH } from "../constants/type";


export const InCount = (data) => {
    return {
        type: INCREMENT,
        payload: data
    }
}
export const OutCount = (data) => {
    return {
        type: DECREMENT,
        payload: data
    }
}
export const Refresh = (data) => {
    return {
        type: REFRESH,
        payload: data
    }
}
