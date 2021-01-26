<template>
  <div class="home">
    <DocumentTable :items="files" />
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
import DocumentTable from "../components/DocumentTable.vue";

export default {
  name: "Home",
  components: {
    DocumentTable
  },
  computed: {
    files() {
      return this.$store.state.files;
    }
  },
  methods: {
    getFiles() {
      return this.$store.dispatch("getAllFiles");
    }
  },
  created: function() {
    this.$store.dispatch("getAllFiles");
  }
};
</script>
