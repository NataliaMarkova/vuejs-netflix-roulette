<template>
  <router-link :to= "'/movie/' + movie.id">
    <div>
      <figure>
        <img :src = "movie.posterPath">
        <figcaption>
          <div class="row">
            <div class="col-sm-9">
              <h4 class="text-secondary font-weight-light">{{ movie.title }}</h4>
              <p class="text-secondary font-weight-light">{{ movie.tagline }}</p>
            </div>
            <div class="col-sm-3 float-right">
              <button type="button" class="btn btn-sm btn-outline-secondary float-right">
                {{ movie.releaseDate | year }}
              </button>
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  </router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Movie } from '@/models/Movie';

@Component
export default class MovieThumbnail extends Vue {
  @Prop()
  private movie: Movie;
}

</script>

<style>
  @import '~bootstrap/dist/css/bootstrap.min.css';

  body {
      background-color: #232323;
  }

  figure {
    width: 354px;
    height: 100%;
    margin: 0 2px 5px;
    padding: 15px 15px 10px;
    transition: opacity .4s ease-in-out;
    display: inline-block;
    column-break-inside: avoid;
  }

  figure img {
      width: 324px;
      height: auto;
      padding-bottom: 15px;
      margin-bottom: 5px;
  }

  figure figcaption {
      font-size: .9rem;
      color: #444;
      line-height: 1.5;
  }
</style>
