<template>
  <section class="vf-l-product-image mb-4">
    <skeleton shape="radius" theme="opacity" bg-color="#eee" width="100%" duration="2">
      <tb-skeleton height="500px"></tb-skeleton>
      <vf-m-row class="mt-3">
        <vf-m-col sm="12" md="3" v-for="(value) in [1,2,3,4]" :key="value">
          <tb-skeleton width="100px" height="100px" class="mx-auto"></tb-skeleton>
        </vf-m-col>
      </vf-m-row>
    </skeleton>
  </section>
</template>
<script>
import {TbSkeleton, Skeleton} from 'tb-skeleton'

export default {
  components: {
    TbSkeleton,
    Skeleton
  }
}
</script>

