<template lang='html'>
  <div class='element' :class='accordionClasses'>
    <div class='element__header' @click='toggleAccordion'>
      <div class='element__chevron'>
        <img src='../assets/images/chevron.svg' :class='chevronClasses'>
      </div>
      {{ name }}        
    </div>
    <div class='element__body'>
      <div class='element__content'>
        {{ description }}
        <button class='element__linkbutton' @click='changeModal'>{{ labelButton }}</button>
      </div>
    </div>
    <div class='modal' :class='modalClasses'>
      <div class='modal__wrapper'>
        <div class='modal__card'>
            <div class='modal__closebox'>
              <img src='../assets/images/close.svg' class='modal__close'  @click='changeModal' />
            </div>
            <div class='modal__content'>
              <div class='modal__title'>
                {{name}}
              </div>
              <div class='modal__description'>
                {{brewers_tips}}
              </div>
              <div class='modal__imagebox'>
                <img v-bind:src='image_url' />
              </div>
              <div class='modal__data' v-if='food_pairing'>
                <div class='modal__titledata'>
                  {{modalTitleData}}
                </div>
                <ol>
                  <li v-for="food in food_pairing">
                    {{ food }}
                  </li>
                </ol>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'accorElement',
    props: {
      name: {
        type: String,
        required: true
      },
      tagline: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      image_url: {
        type: String,
        required: true,
        validator (value) {
          return value.startsWith('http')
        }
      },
      food_pairing: {
        type: Array,
        required: false,
        default: ''
      },
      brewers_tips: {
        type: String,
        required: false,
        default: ''
      }
    },
    data () {
      return {
        labelButton: 'Ver más',
        isOpen: false,
        showModal: false,
        modalTitleData: 'Food pairing'
      }
    },
    methods: {
      toggleAccordion: function () {
        this.isOpen = !this.isOpen
      },
      changeModal: function () {
        this.showModal = !this.showModal
      }
    },
    computed: {
      accordionClasses: function () {
        return {
          'element--closed': !this.isOpen
        }
      },
      chevronClasses: function () {
        return {
          'element--chevrondown': this.isOpen
        }
      },
      modalClasses: function () {
        return {
          'modal--show': this.showModal
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
.element {
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 2px solid var(--shadow);
  padding:0 4px;
}

.element__chevron{
  margin-right: 15px;
}

.element--chevrondown{
  -moz-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
}

.element__header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 12px 12px 16px 0;
  position: relative;
  font-size: 16px;
  line-height: 16px;
  font-weight: bold;
  color: var(--color-blue);
  cursor: pointer;
}

.element__body {
  width: 100%;
  padding: 0;
  overflow: hidden;
}

.element--closed{
  & .element__body{
    max-height: 0;
  }
}

.element__content {
  line-height: 1.43;
  padding: 0 12px 18px 24px; 
}

.element__linkbutton{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  color: var(--color-light-blue);
  cursor: pointer;
  margin-top:12px;
}

.modal{
  position:fixed;
  display:none;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background-color: var(--shadow-black);
  z-index:10;
  transition: opacity .3s ease;
}

.modal--show{
  display:table;
}

.modal__wrapper{
  display: table-cell;
  vertical-align: middle;
}

.modal__card{
  width: 500px;
  height: 489px;
  margin: 0px auto;
  padding: 19px 16px;
  border-radius: 4px;
  box-shadow: 0 12px 24px var(--shadow-lighter-black);
  transition: all .3s ease;
  background-color: var(--color-white);
  border-bottom: solid 20px var(--color-blue);
}

.modal__closebox{
  width: 10px;
  height: 10px;
  float: right;
}

.modal__close{
  cursor: pointer;
}

.modal-content{
  padding: 14px 16px;
}

.modal__title{
  width: 100%;
  font-size: 24px;
  font-weight: 300;
  color: var(--color-blue);
  margin-bottom: 16px;
}

.modal__description{
  float: left;
  width: 204px;
  margin-right: 32px;
  line-height: 1.43;
}

.modal__imagebox{
  float:right;
  width: 200px;
  height: 360px;

  & img{
    display: block;
    width: auto;
    height: 100%;
    margin: 0 auto;
  }
}

.modal__data{
  float: left;
  width: 204px;
  margin-top: 34px;

  & ol{
    width: 100%;
    margin-top: 41px;
    list-style-position:inside;
  }

  & li{
    margin-bottom: 8px;
  }
}

.modal__titledata{
  width: 100%;
  font-weight: 500;
}
</style>