<template>
  <div>
    <b-table
      :items="items"
      :fields="fields"
      :select-mode="selectMode"
      responsive="sm"
      ref="selectableTable"
      selectable
      @row-selected="onRowSelected"
    >
      <!-- Example scoped slot for select state illustrative purposes -->
      <template #cell(selected)="{ rowSelected }">
        <template v-if="rowSelected">
          <span aria-hidden="true">&check;</span>
          <span class="sr-only">Selected</span>
        </template>
        <template v-else>
          <span aria-hidden="true">&nbsp;</span>
          <span class="sr-only">Not selected</span>
        </template>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: ["fileName", "userName", "title", "tags"],
      selectMode: "single",
      selected: {}
    };
  },
  props: ["items"],
  methods: {
    onRowSelected(items) {
      this.selected = items[0];
      if (this.selected.fileName) {
        console.log(this.selected.fileName);
        this.$router.push("/file/" + this.selected.fileName);
      }
    }
  }
};
</script>
