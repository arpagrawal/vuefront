<template>
  <div>
    <b-pagination
      v-if="totalPages > 1"
      :value="page"
      :total-rows="totalPages"
      @input="handleChange"
    />
  </div>
</template>
<script>
import { BPagination } from "bootstrap-vue";
export default {
  components: {
    BPagination
  },
  props: {
    page: {
      type: Number,
      default: 0
    },
    totalPages: {
      type: Number,
      default: 1
    }
  },
  methods: {
    handleChange(e) {
      this.$emit("input", e);
    }
  }
};
</script>
