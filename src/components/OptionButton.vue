<template>
  <button type="button" :class="[active ? 'btn-danger' : 'btn-secondary', 'btn text-uppercase']" v-on:click="emitValue">
    {{ title }}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class OptionButton extends Vue {
  @Prop()
  private title: string

  @Prop()
  private value: string

  @Prop()
  private active: boolean

  emitValue(): void {
    this.$emit('clicked', this.value);
  }
}

</script>

<style>
  @import '~bootstrap/dist/css/bootstrap.min.css';
</style>
