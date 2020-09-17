<template>
  <div class="container">
    <SearchOptions />
    <SearchResult />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import SearchOptions from '@/components/SearchOptions.vue';
import SearchResult from '@/components/SearchResult.vue';
import Footer from '@/components/Footer.vue';

@Component({
  components: { SearchOptions, SearchResult, Footer },
})
export default class Home extends Vue {
}

</script>
