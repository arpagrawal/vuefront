<template>
  <vf-o-apollo
    :variables="{search:keyword}"
  >
    <template #loader>
      <vf-l-product-module :column="column"/>
    </template>
    <template #default="{data}">
      <vf-o-product-module
        v-if="data.searchProduct.content.length > 0"
        :items="data.searchProduct.content"
        :column="column"
      >{{$t('modules.store.searchProduct.textTitle')}}</vf-o-product-module>
    </template>
  </vf-o-apollo>
</template>
<script>
export default {
  props: {
    column: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    keyword() {
      return this.$route.params.slug ? this.$route.params.slug : "";
    }
  }
};
</script>
<graphql>
query($search: String){
    searchProduct: productsList(page: 1, size: 12, sort: "date_added", order: "DESC", search: $search) {
        content {
            id
            name
            shortDescription
            price
            special
            image
            imageLazy
            rating
            keyword
        }
    }
}
</graphql>