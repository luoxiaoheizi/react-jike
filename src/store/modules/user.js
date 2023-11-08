import { createSlice } from '@reduxjs/toolkit'
import { http } from '@/utils'
const userStore = createSlice({
    name:'user',
    initialState:{
        token:''
    },
    reducers:{
        setUserInfo(state,action){
            state.userInfo = action.payload
        }
    }
})

const { setUserInfo } = userStore.actions

const userReducer = userStore.reducer

const fetchLogin = (loginForm) => {
    return async(dispatch)=>{
        const res = await http.post('/authorizations',loginForm)
        dispatch(setUserInfo(res.data.token))
    }
}

export {fetchLogin}

export default userReducer