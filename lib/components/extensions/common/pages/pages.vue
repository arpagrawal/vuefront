<template>
  <vf-o-apollo v-slot="{data}">
    <section class="module-pages">
      <vf-a-heading level="6" class="heading mb-3">{{$t('modules.common.pages.textTitle')}}</vf-a-heading>
      <ul class="list-unstyled">
        <li v-for="(value, key) in data.pagesList.content" :key="key">
          <vf-a-link :to="url(value)" v-html="value.title" />
        </li>
      </ul>
    </section>
  </vf-o-apollo>
</template>
<script>
export default {
  methods: {
    url(page) {
      if (page.keyword && page.keyword !== "") {
        return "/" + page.keyword;
      } else {
        return `/page/${page.id}`;
      }
    }
  }
};
</script>
<graphql>
{
  pagesList (page: 1, size: 4) {
    content {
      id
      title
      keyword
    }
  }
}
</graphql>