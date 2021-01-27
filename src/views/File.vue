<template>
  <div class="nav">
    <table>
      <tr>
        <td class="text">
          <DocumentText
            :filename="file.fileName"
            :username="file.userName"
            :references="file.references"
            :tags="file.tags"
            :text="file.text"
            :title="file.title"
          />
        </td>
        <td class="links">
          <DocumentLinks
            :filename="file.fileName"
            :referencedBy="file.referencedBy"
          />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import DocumentText from "../components/DocumentText.vue";
import DocumentLinks from "../components/DocumentLinks.vue";

export default {
  name: "Home",
  data() {
    return {
      file: this.$store.getters.getFileByName(this.$route.params.filename)
    };
  },
  components: {
    DocumentText,
    DocumentLinks
  },
  watch: {
    $route(to, from) {
      console.log(to.path);
      console.log(from.path);
      this.file = this.$store.getters.getFileByName(
        this.$route.params.filename
      );
    }
  }
};
</script>

<style scoped>
.text {
  width: 80%;
  text-align: left;
  white-space: pre-line;
}

.links {
  width: 20%;
  vertical-align: top;
}
</style>
