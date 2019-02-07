<template lang='html'>
  <ul class="list">
    <li v-for='element in elements'>
      <accor-element 
        v-bind:name='element.name'
        v-bind:tagline='element.tagline'
        v-bind:description='element.description'
        v-bind:image_url='element.image_url'
        v-bind:food_pairing='element.food_pairing'
        v-bind:brewers_tips='element.brewers_tips'
      ></accor-element>
    </li>
  </ul>
</template>

<script>
  import axios from 'axios'
  import accorElement from '@/components/accorElement'

  export default {
    name: 'accorList',
    components: {
      accorElement
    },
    data () {
      return {
        elements: []
      }
    },
    mounted () {
      this.getElements()
    },
    methods: {
      getElements: function () {
        axios.get(`${process.env.API}beers?per_page=4`)
          .then(response => {
            this.elements = response.data
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
</script>

<style lang='scss' scoped>
.list{
  width: 100%;
  height: 390px;
  overflow-y: auto;
}
</style>
