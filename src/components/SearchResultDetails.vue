<template>
  <div class="container" >
    <div class="row filter-header text-light">
      <div class="col col-lg-6">
        <h7 class="align-middle font-weight-bold">
          Films by {{ searchText }} {{ searchBy }}
        </h7>
      </div>
    </div>
    <MovieList :movies = "movies"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Movie } from '@/models/Movie';
import MovieList from '@/components/MovieList.vue';
import OptionButton from '@/components/OptionButton.vue';
import { namespace } from 'vuex-class';

const movies = namespace('movies');

@Component({
  components: { MovieList, OptionButton },
})
export default class SearchResultDetails extends Vue {
  @movies.Getter
  private movies: Array<Movie>;

  @movies.State
  private searchText: string;

  @movies.State
  private searchBy: string;
}

</script>

<style>
  @import '~bootstrap/dist/css/bootstrap.min.css';

  body {
      background-color: #232323;
  }

  .no-found {
    padding: 20px;
  }

  section {
      padding-bottom: 35px;
  }
</style>
