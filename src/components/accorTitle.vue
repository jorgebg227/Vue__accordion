<template lang='html'>
    <div class='boxtitle'>
      <h1>{{ title }}</h1>
    </div>
</template>

<script>
    export default {
      name: 'accorTitle',
      data () {
        return {
          title: 'Beers List'
        }
      }
    }
</script>

<style lang='scss' scoped>
  .boxtitle {
    width: 100%;
    height: 68px;
    margin-bottom: 45px;
    padding: 0 4px;

    & h1{
      font-size: 64px;
      font-weight: 300;
      line-height: 1.06;
    }
  }
</style>
