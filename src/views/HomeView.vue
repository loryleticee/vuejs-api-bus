<script setup lang="ts">
import LoginForm from "@/components/TheLoginForm.vue";
import { useRouter } from "vue-router";

const router = useRouter();

async function handleSubmit(user) {
  let response = await fetch("https://apibus.quidam.re/api/login_check", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((r) => {
      return r.json();
    })
    .catch();

  if (response.token && response.refresh_token) {
    localStorage.setItem("token", response.token);
    localStorage.setItem("refresh_token", response.refresh_token);

    router.push("bus");
  }
}
</script>

<template>
  <main>
    <LoginForm @login-submit="handleSubmit" />
  </main>
</template>
