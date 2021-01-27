<template>
  <div>
    <h1>Title: {{ prepareTitle }}</h1>
    <h3>By {{ username }}</h3>
    <h3>Tags: {{ prepareTags }}</h3>
    <div>{{ text }}</div>
    <br>
    <h3>See also:</h3>
    <router-link
      v-for="item in references"
      v-bind:key="item"
      :to="'/file/' + item"
    >
      {{ item }}<br>
    </router-link>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  props: ["text", "title", "filename", "username", "tags", "references"],
  methods: {
    arrayToString(p) {
      return p.reduce((acc, res) => acc + res + " | ", "").slice(0, -2);
    }
  },
  computed: {
    prepareTitle() {
      return this.arrayToString(this.title);
    },
    prepareTags() {
      return this.arrayToString(this.tags);
    }
  },

  beforeRouteUpdated(to) {
    console.log("updated" + to);
  }
};
</script>
