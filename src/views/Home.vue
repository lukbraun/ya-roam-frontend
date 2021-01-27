<template>
  <div class="home">
    <DocumentTable :items="files" />
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
      return this.$store.getters.getFilesForTable;
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
