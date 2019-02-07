<template lang='html'>
  <div class='card'>
    <accor-title></accor-title>
    <router-view></router-view>
  </div>
</template>

<script>
import accorTitle from '@/components/accorTitle'

export default {
  name: 'AccorApp',
  components: {
    accorTitle,
    accorList: () => import('@/components/accorList')
  }
}
</script>
<style lang='scss' scoped>
  @import './assets/css/reset.css';
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&subset=latin-ext');
  @import './assets/css/colors.css';
  .card {
    width: 568px;
    height: 608px;
    border-radius: 5px;
    box-shadow: 4px 4px 4px 0 var(--shadow);
    background-color: var(--color-white);
    padding: 45px 45px;
    font-family: Roboto;
    font-size: 14px;
    color: var(--color-black);
  }
</style>
<style lang='css'>
body {
  width: 100%;
  height: 100%;
  background-color: var(--color-grey);
  padding: 100px;
}
</style>
