<script setup>
import { reactive } from "@vue/reactivity";

const emit = defineEmits(["login-submit"]);

const user = reactive({
  username: "",
  password: "",
});

function handleSubmitOnChild() {
  emit("login-submit", user);
}
</script>

<template>
  <form @submit.prevent="handleSubmitOnChild">
    <input type="text" v-model="user.username" name="username" id="username" />
    <input
      type="password"
      v-model="user.password"
      name="password"
      id="password"
    />
    <input type="submit" value="Login" />
  </form>
</template>

