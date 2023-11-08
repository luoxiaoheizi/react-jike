import { createSlice } from '@reduxjs/toolkit'
import { getToken, setToken } from '@/utils'
import { http } from '@/utils'
const userStore = createSlice({
    name:'user',
    initialState:{
        token:getToken() || ''
    },
    reducers:{
        setUserInfo(state,action){
            state.token = action.payload
            state.userInfo = action.payload
            setToken(state.token)
        }
    }
})

const { setUserInfo } = userStore.actions

const userReducer = userStore.reducer

const fetchLogin = (loginForm) => {
    return async(dispatch)=>{
        const res = await http.post('/authorizations',loginForm)
        console.log(25,res);
        dispatch(setUserInfo(res.data.token))
    }
}

export {fetchLogin}

export default userReducer