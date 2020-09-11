<template>
  <header class="movie-header">
    <div class="row">
      <div class="col col-md-10">
        <Logo/>
      </div>
      <div class="col col-md-2 search-icon">
        <router-link :to="'/'" ><i class="fas fa-search"></i></router-link>
      </div>
    </div>
    <div class="row">
      <div class="col col-md-4 text-center">
        <img class="movie-img" :src="movie.posterPath">
      </div>
      <div class="col col-md-7">
        <div class="row">
          <div class="col">
            <h1 class="text-light font-weight-light text-uppercase">
              {{ movie.title }}&nbsp;&nbsp;
              <span class="badge badge-pill badge-outline-info align-middle font-weight-light">
                {{ movie.voteAverage }}
              </span>
            </h1>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p class="text-secondary font-weight-light">{{ movie.tagline }}</p>
          </div>
        </div>
        <div class="row">
          <div class="col col-md-2">
            <h4 class="text-danger font-weight-light">{{ movie.releaseYear() }}</h4>
          </div>
          <div class="col col-md-2">
            <h4 v-if="movie.runtime" class="text-danger font-weight-light">{{ movie.runtime }} min</h4>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p class="text-secondary">
              {{ movie.overview }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Movie } from '@/models/Movie';
import Logo from '@/components/Logo.vue';

@Component({
  components: { Logo },
})
export default class MovieDetails extends Vue {
  @Prop()
  private id: number;

  @Prop({
    default: [],
  })
  private movies: Array<Movie>;

  get movie(): Movie {
    return this.movies.find((movie) => movie.id === this.id);
  }
}

</script>

<style>
  @import '~bootstrap/dist/css/bootstrap.min.css';

  body {
    background-color: #232323;
  }

  header .logo {
    height: 20px;
    margin: 20px;
  }

  .movie-header {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    background-color: #000;
  }

  .search-icon {
    padding: 20px;
  }

  @media (min-width: 576px) {
    .movie-header {
        max-width: 540px
    }
  }

  @media (min-width: 768px) {
    .movie-header {
        max-width: 720px
    }
  }

  @media (min-width: 992px) {
    .movie-header {
        max-width: 960px
    }
  }

  @media (min-width: 1200px) {
    .movie-header {
        max-width: 1140px
    }
  }

  .movie-header .logo {
      height: 20px;
      margin: 20px;
  }

  .movie-header .movie-img {
    width: 324px;
    height: auto;
    padding-bottom: 15px;
    margin-bottom: 5px;
  }

  .badge {
    line-height: 1.5;
    padding: 0.5rem;
    font-weight: normal;
    min-width: 65px;
  }

  .badge-outline-primary {
    color: #405189;
    border: 1px solid #405189
  }

  .badge.badge-pill {
    border-radius: 50%;
  }

  .badge-outline-info {
    color: #a1e66f;
    border: 1px solid #555555;
  }

  .fa-search {
    color: #dc3545;
  }
</style>
