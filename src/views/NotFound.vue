<template>
  <div class="container">
    <NotFoundContent />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Footer from '@/components/Footer.vue';
import NotFoundContent from '@/components/NotFoundContent.vue';

@Component({
  components: { NotFoundContent, Footer },
})
export default class NotFound extends Vue {
}

</script>
