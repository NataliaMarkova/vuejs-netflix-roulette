<template>
  <div class="container">
    <MovieDetails :id = "id" />
    <SearchResultDetails />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import MovieDetails from '@/components/MovieDetails.vue';
import SearchResultDetails from '@/components/SearchResultDetails.vue';
import Footer from '@/components/Footer.vue';

@Component({
  components: { MovieDetails, SearchResultDetails, Footer },
})
export default class Details extends Vue {
  @Prop()
  private id: number;
}
</script>
