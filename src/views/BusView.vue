<script setup lang="ts">
import TheBus from "@/components/TheBusComponent.vue";
import { busStore } from "../stores/bus";
import { onMounted } from "vue";

const store = busStore();

async function fetchOneBus() {
  let response = await fetch("https://apibus.quidam.re/api/buses/1", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((r) => r.json())
    .catch();

  if (response["@id"]) {
    store.childs = response.childs
    store.bus = response
  }
}

onMounted(() => {
  fetchOneBus();
});
</script>

<template>
  <div>
    <TheBus />
  </div>
</template>
