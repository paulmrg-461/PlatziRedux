import axios from 'axios';
import { ERROR, GET_USERS, LOADING } from '../types/userTypes';

export const getUsers = () => async (dispatch) => {
    dispatch({
        type: LOADING
    });
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({
        type: GET_USERS,
        payload: response.data
    })
    } catch (error) {
        console.log('Ups! error: ', error.message);
        dispatch({
            type: ERROR,
            payload: error.message
        })
    }
}