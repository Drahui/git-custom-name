import { defineStore } from "pinia";
import { ref } from "vue";
import { getCurrentUser } from "@/api/user";
import { AxiosResponse } from "axios";
import { logicalPropertiesLinter } from "ant-design-vue";
export const useLoginUserStore = defineStore("loginUser", () => {
  const loginUser = ref<any>({
    username: "未登录",
  });
  //远程获取登录用户信息
  async function fetchLoginUser() {
    const res = await getCurrentUser();
    if (res.data.code === 0 && res.data.data) {
      loginUser.value = res.data.data;
    }
    /*else {
      setTimeout(() => {
        loginUser.value = { userName: "小黑子", id: 1 };
      }, 3000);
    }*/
  }
  //单独设置信息

  function setLoginUser(newLoginUser: any) {
    loginUser.value = newLoginUser;
  }

  return { loginUser, fetchLoginUser, setLoginUser };
});
