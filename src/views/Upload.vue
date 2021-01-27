<template>
  <div>
    <b-form class="position-relative p-3" @submit="onSubmit">
      <b-form-group label="Name" label-for="form-name" label-cols-lg="2">
        <b-input-group>
          <b-input-group-prepend is-text>
            <b-icon icon="person-fill"></b-icon>
          </b-input-group-prepend>
          <b-form-input
            required
            v-model="userName"
            id="form-name"
          ></b-form-input>
        </b-input-group>
      </b-form-group>

      <b-form-group label="File" label-for="form-image" label-cols-lg="2">
        <b-input-group>
          <b-input-group-prepend is-text>
            <b-icon icon="image-fill"></b-icon>
          </b-input-group-prepend>
          <b-form-file
            multiple
            required
            id="form-image"
            accept=".org"
            v-model="textFile"
          ></b-form-file>
        </b-input-group>
      </b-form-group>

      <div class="d-flex justify-content-center">
        <b-button ref="submit" type="submit">Submit</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userName: "",
      textFile: []
    };
  },
  methods: {
    onSubmit() {
      const readFile = file => {
        const reader = new FileReader();
        const fileName = file.name;
        reader.addEventListener("load", event => {
          const text = event.target.result;
          console.log(text);
          console.log(fileName);
          this.send(fileName, text);
          // filename, username + text POST
        });
        reader.readAsText(file);
      };
      this.textFile.forEach(file => {
        readFile(file);
      });
    },
    send(fileName, text) {
      axios.post("http://20.73.130.168:8080/files", {
        fileName: fileName,
        text: text,
        userName: this.userName
      });
    }
  }
};
</script>
