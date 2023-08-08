import { INCREMENT } from './types';

export const increment = (no) => {
    return{
        type: INCREMENT,
        payload: no
    }
}