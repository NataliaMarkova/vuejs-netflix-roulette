<template>
  <div class="container">
    <MovieDetails :id = "id" />
    <SearchResultDetails :searchText = "searchText" :searchBy = "searchBy" />
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
  private searchBy = 'genre';

  private searchText = 'Drama';

  @Prop()
  private id: number;
}
</script>
