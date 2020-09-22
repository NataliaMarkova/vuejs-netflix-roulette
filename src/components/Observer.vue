<template>
  <div class="observer"/>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Observer extends Vue {
  @Prop()
  private options: IntersectionObserverInit;

  private observer: IntersectionObserver;

  mounted() {
    const options: IntersectionObserverInit = this.options || {};

    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.$emit('intersected');
      }
    }, options);
    this.observer.observe(this.$el);
  }

  destroyed() {
    this.observer.disconnect();
  }
}

</script>
