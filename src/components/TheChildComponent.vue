<script setup>
import { computed } from "vue";

const props = defineProps(["child"]);

const sexe = computed( () => {
  return props.child.sexe === "F" ? "Garçon" : "Fille"
})

const fullname = computed(() => {
  return `${props.child?.firstname} ${props.child?.lastname}`;
});

</script>

<template>
  <div>
    <div>
      <h1></h1>
      <span> {{ fullname }}</span>
    </div>
    <h3>sexe : </h3>
    <span> {{ sexe }}</span>
  </div>
</template>
