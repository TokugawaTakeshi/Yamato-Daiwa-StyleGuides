<template lang="pug">

  .SampleVueComponent

</template>


<script lang="ts">

  import { Component as VueComponentOptions, Vue as VueComponent } from "vue-facing-decorator";

  // @vue/component
  @VueComponentOptions({
    name: "SampleVueComponent",
    components: {

    }
  })
  export default class SampleVueComponent extends VueComponent {

    public beforeCreate(): void {
      var alpha = 1;
    }

    public created(): void {
      this.initializeNonReactiveClassFields();
    }

    private initializeNonReactiveClassFields(): void {

    }

  }

</script>
