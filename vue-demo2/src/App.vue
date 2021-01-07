<template>
  <div id="app">
    <!-- 单行文本input -->
    <!-- <input v-model="message" placeholder="edit me" />
    <p>Message is: {{ message }}</p>
    <p><button @click="message = 'frank'">set message to frank</button></p> -->
    <!-- 多行文本textarea -->
    <!-- <textarea v-model="message" placeholder="edit me" />
    <p>Message is: {{ message }}</p>
    <p><button @click="message = 'frank'">set message to frank</button></p> -->
    <!-- 复选框 ：单个复选框，绑定到布尔值 -->
    <!-- <label>
      <input type="checkbox" v-model="x" />
      <span>x:{{ x }}</span>
    </label> -->
    <!-- 复选框 ：多个复选框，绑定到同一个数组 -->
    <!-- 爱好：{{ hobby }}
    <label>
      <input type="checkbox" v-model="hobby" :value="1" />
      <span>唱歌</span>
    </label>
    <label>
      <input type="checkbox" v-model="hobby" :value="2" />
      <span>跳舞</span>
    </label>
    <label>
      <input type="checkbox" v-model="hobby" :value="3" />
      <span>打游戏</span>
    </label> -->
    <!-- 单选按钮 -->
    <!-- 性别：{{ gender }}
    <label>
      <input name="gender" type="radio" v-model="gender" :value="1" />
      <span>男</span>
    </label>
    <label>
      <input name="gender" type="radio" v-model="gender" :value="2" />
      <span>女</span>
    </label>
    <label>
      <input name="gender" type="radio" v-model="gender" :value="3" />
      <span>未知</span>
    </label> -->
    <!-- 选择框-单选1 -->
    <!-- 职业：{{ profession }}
    <select v-model="profession">
      <option value="">请选择</option>
      <option :value="1">教师</option>
      <option :value="2">公务员</option>
      <option :value="3">打工人</option>
    </select> -->
    <!-- 选择框-单选2
    职业：{{ profession }}
    <select v-model="profession">
      <option value="">请选择</option>
      <option v-for="item in array" :value="item.value" :key="item.key">{{
        item.text
      }}</option>
    </select> -->
    <!-- 选择框-多选  multiple -->
    <!-- 职业：{{ profession }}
    <select multiple v-model="profession">
      <option v-for="item in array" :value="item.value" :key="item.key">{{
        item.text
      }}</option>
    </select> -->
    <!-- form -->
    <!-- 登录
    <form @click.prevent="onSubmit">
      <label>
        <span>用户名</span><input type="text" v-model="user.username" />
      </label>
      <label>
        <span>密码</span><input type="password" v-model="user.password" />
      </label>
      <button type="submit">登录</button>
    </form> -->
    <!-- .lazy -->
    <!-- 登录:{{ user }}
    <hr />
    <form @click.prevent="onSubmit">
      <label>
        <span>用户名</span><input type="text" v-model.lazy="user.username" />
      </label>
      <label>
        <span>密码</span><input type="password" v-model="user.password" />
      </label>
      <button type="submit">登录</button>
    </form> -->
    <!-- .number -->
    <!-- 登录:{{ user }}
    <hr />
    <form @click.prevent="onSubmit">
      <label>
        <span>用户名</span><input type="text" v-model.number="user.username" />
      </label>
      <label>
        <span>密码</span><input type="password" v-model="user.password" />
      </label>
      <button type="submit">登录</button>
    </form> -->
    <!-- .trim -->
    <!-- 登录:{{ user }}
    <hr />
    <form @click.prevent="onSubmit">
      <label>
        <span>用户名</span><input type="text" v-model.trim="user.username" />
      </label>
      <label>
        <span>密码</span><input type="password" v-model="user.password" />
      </label>
      <button type="submit">登录</button>
    </form> -->
    <!-- v-model原理 -->
    <!-- 登录:{{ user }}
    <hr />
    <form @click.prevent="onSubmit">
      <label>
        //<span>用户名</span><input type="text" v-model="user.username" /> 
        <span>用户名</span
        ><input
          type="text"
          :value="user.username"
          @input="user.username = $event.target.value"
        />
      </label>
      <label>
        <span>密码</span><input type="password" v-model="user.password" />
      </label>
      <button type="submit">登录</button>
    </form> -->
    <!-- v-model原理  自定义Myinput组件 -->
    <!-- 登录:{{ user }}
    <hr />
    <form @click.prevent="onSubmit">
      <label>
        <span>用户名</span>
        <Myinput v-model="user.username" />
        <Myinput :value="user.username" @input="user.username = $event" />
      </label>
      <label>
        <span>密码</span><input type="password" v-model="user.password" />
      </label>
      <button type="submit">登录</button>
    </form> -->
    <!-- Antd -->
    <a-input placeholder="Basic usage" />
  </div>
</template>

<script>
// import Myinput from "./Myinput.vue";
export default {
  name: "App",
  data() {
    return {
      message: "hi",
      x: true, //true：默认选中
      hobby: [], //默认是空数组
      gender: [], //默认是空数组
      profession: [], //职业 单选默认是空字符串''，多选默认是空数组[]
      array: [
        { text: "教师", value: 1 },
        { text: "公务员", value: 2 },
        { text: "打工人", value: 3 },
      ],
      user: {
        //user对象存储用户名和密码
        username: "", //如果是数字类型，默认值是0
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.user);
    },
  },
  // components: { Myinput },
};
</script>
