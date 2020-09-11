<template>
  <header class="search-header">
    <div class="row">
      <div class="col">
        <Logo/>
      </div>
    </div>
    <SearchBar :searchText.sync="searchText" />
    <div class="row justify-content-md-center align-items-center search-by">
      <div class="col col-lg-2">
        <h6 class="font-weight-light text-uppercase text-light align-middle">Search by {{ searchText }}</h6>
      </div>
      <div class="col col-lg-8">
        <div class="btn-group" role="group" aria-label="Search by">
          <OptionButton title="Title" value="title" :active="searchByTitle" @clicked="search" ></OptionButton>
          <OptionButton title="Genre" value="genre" :active="searchByGenre" @clicked="search" ></OptionButton>
        </div>
      </div>
    </div>
  </header>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import OptionButton from '@/components/OptionButton.vue';
import SearchBar from '@/components/SearchBar.vue';
import Logo from '@/components/Logo.vue';

@Component({
  components: { SearchBar, OptionButton, Logo },
})
export default class SearchOptions extends Vue {
  searchBy = 'title';

  // @Prop()
  searchText = '';

  get searchByTitle(): boolean {
    return this.searchBy === 'title';
  }

  get searchByGenre(): boolean {
    return this.searchBy === 'genre';
  }

  search(searchBy: string): void {
    this.searchBy = searchBy;
    this.$emit('search', this.searchBy, this.searchText);
  }
}

</script>

<style>
  @import '~bootstrap/dist/css/bootstrap.min.css';

  body {
      background-color: #232323;
  }

  .search-header {
    background-image: url("../assets/header.png");
    height: 100%;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  .search-header .row {
      padding-bottom: 30px;
  }

  @media (min-width: 576px) {
      .search-header {
          max-width: 540px
      }
  }

  @media (min-width: 768px) {
      .search-header {
          max-width: 720px
      }
  }

  @media (min-width: 992px) {
      .search-header {
          max-width: 960px
      }
  }

  @media (min-width: 1200px) {
      .search-header {
          max-width: 1140px
      }
  }

  .filter-header {
      background-color: #555555;
  }

  .filter-header .col {
      margin: 15px;
  }

  header .logo {
      height: 20px;
      margin: 20px;
  }

  .form-control {
      background-color: rgba(35, 35, 35, 0.8);
      border: 1px solid #232323;
      line-height: 2;
  }

  .form-control:hover, .form-control:active, .form-control:valid {
      background-color: rgba(35, 35, 35, 0.8);
      border: 1px solid #232323;
  }

  .search-box .btn {
      line-height: 2;
  }

  .btn-secondary {
      background-color: rgba(35, 35, 35, 0.9);
      border-color: #232323;
  }

  .search-by .btn, .filter-header .btn {
      line-height: 1;
  }

</style>
