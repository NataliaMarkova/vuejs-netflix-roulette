<template>
  <div class="row justify-content-md-center search-box">
    <div class="col col-lg-7">
      <input type="text" class="form-control text-light" placeholder="Search" name="search"
        v-model = "search" @keyup.enter = "doSearch">
    </div>
    <div class="col col-lg-3">
      <button type="button" class="btn btn-danger btn-block" @click = "doSearch">Search</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SearchBar extends Vue {
  private search = '';

  doSearch(): void {
    this.$router.push({ path: '/', query: { ...this.$route.query, ...{ search: this.search.trim() } } });
  }

  mounted() {
    this.search = this.$route.query.search || '';
  }
}

</script>

<style>
  @import '~bootstrap/dist/css/bootstrap.min.css';

  .search-box .btn {
      line-height: 2;
  }

</style>
