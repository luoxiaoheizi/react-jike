import { createSlice } from "@reduxjs/toolkit";
import { getToken, setToken } from "@/utils";
import { http } from "@/utils";
const userStore = createSlice({
  name: "user",
  // 数据状态
  initialState: {
    token: getToken() || "",
    userInfo: {},
  },
  // 同步修改方法
  reducers: {
    setUserToken(state, action) {
      state.token = action.payload;
      // 存入本地
      setToken(state.token);
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    },
  },
});

// 解构出actionCreater
const { setUserInfo, setUserToken } = userStore.actions;

// 获取reducer函数
const userReducer = userStore.reducer;

// 异步方法封装
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const data = await http.post("/authorizations", loginForm);
    console.log(data);
    const res = {
      data: {
        token: "xsajnsadhsjdsamhdjsuvallujivjan",
      },
    };
    dispatch(setUserToken(res.data.token));
  };
};
const fetchUserInfo = () => {
  return async (dispatch) => {
    const res = {
      data: {
        name: "罗小黑",
      },
    };
    dispatch(setUserInfo(res.data));
  };
};

export { fetchLogin, fetchUserInfo };

export default userReducer;
