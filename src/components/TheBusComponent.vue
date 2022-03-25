<script setup>
import { computed } from "@vue/runtime-core";
import { busStore } from "../stores/bus";
import Child from "@/components/TheChildComponent.vue";

const store = busStore();

const childs = computed(() => {
  return store.getChilds;
});

const bus = computed(() => {
  return store.getBus;
});
</script>

<template>
  <h1>LE BUS</h1>
  <div>
    <h5>Immatriculation</h5>
    {{ bus.immat }}
    <h3>Conducteur</h3>
    <span v-if="bus.driver['@id']">
      {{ bus.driver["@id"] }}
    </span>
  </div>

  <h3>Liste des élèves</h3>
  <div v-for="child in childs" :key="child['@id']">
    <Child :child="child" />
  </div>
</template>
