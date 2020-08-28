<template>
  <header class="movie-header">
    <div class="row">
      <div class="col">
        <img src="../assets/logo.png" class="logo" alt="Netflix Roulette logo">
      </div>
    </div>
    <div class="row">
      <div class="col col-md-4 text-center">
        <img class="movie-img" :src="require(`@/assets/${movie.image}`)">
      </div>
      <div class="col col-md-7">
        <div class="row">
          <div class="col">
            <h1 class="text-light font-weight-light text-uppercase">
              {{ movie.title }}&nbsp;&nbsp;
              <span class="badge badge-pill badge-outline-info align-middle font-weight-light">
                {{ movie.rating }}
              </span>
            </h1>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p class="text-secondary font-weight-light">{{ movie.remark }}</p>
          </div>
        </div>
        <div class="row">
          <div class="col col-md-2">
            <h4 class="text-danger font-weight-light">{{ movie.year }}</h4>
          </div>
          <div class="col col-md-2">
            <h4 class="text-danger font-weight-light">{{ movie.duration }}min</h4>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <p class="text-secondary">
              {{ movie.longDescription }}
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

@Component
export default class MovieDetails extends Vue {
  @Prop()
  private movie: Movie;
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
</style>
