import axios from 'axios'

export const login = (username, password, JWT_KEY) => async (dispatch) => {
    try {
        const data = await axios.post('https://du-an-tot-nghiep-be.vercel.app/auth/login', { username, password, JWT_KEY });
        const response = await axios.post('https://du-an-tot-nghiep-be.vercel.app/auth/login', { username, password, JWT_KEY });
        const role = response.data.userDelPass;
        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: data });
        console.log(role);
        const firstObject = role[0].role;
        localStorage.setItem('userRole', firstObject);
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({ type: 'USER_LOGIN_FAIL', payload: error.response.data.message });
    }
};


export const SignupUser = (username, mail, password, image, role) => async (dispatch) => {
    try {
        const { data } = await axios.post('https://du-an-tot-nghiep-be.vercel.app/auth/register', { username, mail, password, image, role })
        dispatch({ type: 'USER_SIGNUP_SUCCESS', payload: data });
        document.location.href = '/';
    } catch (error) {
    }
};

export const SignoutUser = (user) => async (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: 'USER_SIGNOUT_SUCCESS', payload: {} })
    document.location.href = '/';
};
if (SignoutUser) {
    localStorage.setItem('userRole', '3');
}

export const getAllUser = () => async (dispatch, getState) => {
    const {
        userSignin: { userInfo },
    } = getState()
    try {
        const { data } = await axios.get('http://localhost:3001/users/65cf6e419398fc792e574359')
        dispatch({ type: 'GET_ALL_USER', payload: data })
    } catch (error) {
        dispatch({ type: 'GET_ALL_USER_FAIL', payload: error.message })
    }
}

export const deleteUser = (userId) => async (dispatch, getState) => {
    const {
        userSignin: { userInfo },
    } = getState()
    try {
        const { data } = await axios.delete(`http://localhost:3001/news/65cf1b0972839744a7190732/${userId}`)
        dispatch({ type: 'DELETE_USER', payload: data })
    } catch (error) {
        dispatch({ type: 'DELETE_USER_FAIL', error: error.message })

    }
}