<script>
export default {
  name: 'IndexPage',
  head(){
    return{
      title: "Skar Professional Artist",
      meta: [
              {
                hid: "description",
                name: "description",
                content: "I'm skar a professional artist who makes use of digital and tradition medium"
              },
              {
                hid: 'canonical',
                rel: 'canonical',
                href: 'https://skarart.netlify.app',
              },{
        hid: 'og:title',
        property: 'og:title',
        content: 'Skar Professional Artist',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'I`m skar a professional artist who makes use of digital and tradition medium',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/pics/personal/paintings/5.webp',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://skarart.netlify.app/'
      },
      {
        property: 'og:locale',
        content: 'en_NG',
      },
      ]
    }
  },
  data(){
    return {
      nav: false,
      hamHover: false,
      hamClick: false
    }
  },
  methods: {
    handleHamClick(){
            this.nav = !this.nav;
            this.hamClick = !this.hamClick;
    },
    handleHamHover(){
            this.hamHover = !this.hamHover;
    },
    handleOverlay(){
            this.nav = !this.nav;
            this.hamClick = !this.hamClick;        
    }
  }
}
</script>


<template>
  <div class="controller">
    
    <NavBar :show="true" :x="false" v-if="$device.isDesktopOrTablet"></NavBar>

    <NavBar :show="nav" :x="nav" v-if="$device.isMobile"></NavBar>
    <MobNavBar v-if="$device.isMobile" ></MobNavBar>
    
    
    <transition name="overlayTrans"> 
      <div class="overlay" v-show="nav" @click="handleOverlay()"></div>
    </transition>
    <Hamburger v-if="$device.isMobile" :ham_hover="hamHover" :ham_click="hamClick" @hamHoverAction="handleHamHover()" @hamClickAction="handleHamClick()"/>
    
    <main class="main__home">
      <img class="main__image" src="pics/clients_work/portrait/2.webp" style="object-fit:cover" width="100%" height="100%" alt="portrait of a lady"/>
    </main>

</div>
</template>


<style lang="scss">

  /* fonts */
  @font-face {
    font-family: romanD;
    src: url("/fonts/RomanD.woff2");
  }

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=Fahkwang:wght@400&display=swap');

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  li{
    text-decoration: none;
    list-style-type: none;
  }

  .controller{
    display: flex;
    background-color: $opa;
    min-height: 100vh;
  }


  
  .main{
    &__home{
      width: 180vmin;
      margin: 0 0 0 40vmin;
      height: 100vh;
      overflow: hidden;
    // background-image: url("/pics/clients_work/portrait/18.webp");
    // background-repeat: no-repeat;
    // background-position: center center;
    // background-size: cover;
    }

    &__image{
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 50% 50%;
    }
  }

.overlay{
        background-color: black;
        position: fixed;
        width: 100vw;
        height: 100vh;
        z-index: 3;
        opacity: 0.8;
        transition: all 3s ease;

        &Trans-enter-active, &Trans-leave-active {
            transition: all .3s;
        }

        &Trans-enter, &Trans-leave-to /* .fade-leave-active below version 2.1.8 */ {
          transform: translateX(150vmin); 
          opacity: 0;
        }
        
    }

  @media only screen and (max-width: 780px){
    .main{
      &__home{
        width: 100%;
        margin: 0 0 0 0;

        // &:before{
        //   content: "";
        //   position: fixed;
        //   background: linear-gradient(#e6646400, #ffffff);;
        //   top: 0;
        //   right: 0;
        //   width: 100vw;
        //   height: 10vh;
        //   z-index: 0;
        // }
      
      }

    }
  }
</style>
