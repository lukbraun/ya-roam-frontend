<template>
  <div>
      <h4>{{ filename }}</h4>
    <br />
    References:
    <router-link
      v-for="item in referencedBy"
      v-bind:key="item"
      :to="'/file/' + item"
    >
     <br> {{ item }}
    </router-link>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  props: ["filename", "referencedBy"]
};
</script>
