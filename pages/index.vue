<script>
export default {
  name: 'IndexPage',
  head(){
    return{
      title: "Home Of Skar | Professional Artist",
      meta: [
              {
                hid: "description",
                name: "description",
                content: "Home | I'm skar a professional artist who makes use of digital and tradition medium"
              },
              
      ]
    }
  },
  data(){
    return {
      nav: false,
      hamHover: false,
      hamClick: false,
      n : 0,
      slide:  {},
      slides:[ 
        {
          "img": "pics/clients_work/portrait/2.webp",
          "text": "leap into the mind of a professional artist",
          "link": "/personal_pass",
          "link_text":"view works",
          "index": 1
        },
        {
          "img": "pics/slides/3.webp",
          "text": "strange strokes from the brush of an artist",
          "link": {
                name:'personal_arts', 
                params: {
                    activeComponent: "StrangeStrokes", 
                    weird: 'hello'
                    }
                },
          "link_text":"strange strokes",
          "index": 2
        },
        {
          "img": "pics/slides/2.webp",
          "text": "30 days ink challenge",
          "link": {
                name:'personal_arts', 
                params: {
                    activeComponent: "InkChallenge", 
                    weird: 'hello'
                    }
                },
          "link_text":"view works",
          "index": 3
        },
        {
          "img": "pics/slides/4.webp",
          "text": "Concept art for clients",
          "link": {
                name:'client_arts', 
                params: {
                    activeComponent: "ConceptArt", 
                    weird: 'hello'
                    }
                },
          "link_text":"view works",
          "index": 4
        }]

      
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
    },
    prev(){
      if (this.n < 4){

          if(this.n==0){
            this.n = 3;
            this.slide = this.slides[this.n];
          }else{
          this.n--;
          this.slide = this.slides[this.n];
          }


      }else{
        this.n = 0;
        this.slide = this.slides[n]
        console.log("ewwey")
      }
    },
  next(){

    if ( this.n < 3){
       this.n++
      this.slide = this.slides[ this.n];
    }else if(this.n == 3){
      this.n = 0;
      this.slide = this.slides[this.n];
    }
    else{
       this.n = 0;
      this.slide = this.slides[ this.n];
    }

  },
  beforeEnter(el){
    this.$gsap.set(el, {opacity: 0.4});
  },
  enter(el, done){
    this.$gsap.to(el, {opacity: 1, duration: 1, oncomplete: done});
  },
  leave(el, done){
    this.$gsap.to(el, {duration: 1, opacity: 0.4, onComplete: done})
  }


  },

  created(){

    let n = this.n;

        this.slide = this.slides[n];

        setInterval(function(){

          if(n < 4){
          this.slide = this.slides[n];
          n++
          }else{
            n = 0;
            this.slide = this.slides[n]
          }
        }.bind(this), 5000);

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
      <transition 
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
      appear
      mode="out-in"
      >
      <img :key="slide.index" class="main__image" :src="slide.img" style="object-fit:cover" width="100%" height="100%" alt="portrait of a lady"/>
      </transition>

      <transition name="slide">
      <section class="main__text" :key="slide.text">
        <div class="main__text-controller">
          <p class="main__text-text">{{slide.text}}</p>
          <NuxtLink :to="slide.link" class="main__text-button">{{ slide.link_text}}</NuxtLink>
        </div>
      </section>
      </transition>
      <div>
      <i class="fa-solid fa-circle-arrow-left leftArrow" @click="prev"></i>
      <i class="fa-solid fa-circle-arrow-right rightArrow" @click="next"></i>
      </div>
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

// .slide-fade-enter-active{
//   transition: all 0.5s ease-in;
// }
// .slide-fade-leave-active {
//   transition: all 0.5s ease-out;
// }

// .slide-fade-enter-to,
// .slide-fade-leave-from {
//   opacity: 1;
// }

// .slide-fade-enter-from,
// .slide-fade-leave-to {
//   opacity: 0.5;
// }



.slide-enter-active, .slide-leave-active {
  transition: all 1s;
}

.slide-enter /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0.2;
}

.slide-leave-to{
  opacity: 0.2; 
}

.leftArrow{
  color: rgba(255, 255, 255, 0.281);
  font-size: 2.5em;
  position: absolute;
  top: 45%;
  left: 6px;
  z-index: 2;
  cursor: pointer;

  &:hover{
    color: rgba(255, 255, 255, 0.897);
  }
}

@media only screen and (min-width:780px){
  .leftArrow{
    left: calc(40vmin + 10px);
  }
}
.rightArrow{
  color: rgba(255, 255, 255, 0.281);
  font-size: 2.5em;
  position: absolute;
  top: 45%;
  right: 8px;
  z-index: 2;
  cursor: pointer;

  &:hover{
    color: rgba(255, 255, 255, 0.897);
  }
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
      position: relative;
      z-index: 1;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 50% 50%;
    }

    &__text{
      position: absolute;
      z-index: 2;
      bottom: 0;
      left: 0;
      width: 100vw;
      overflow: hidden;
      padding: 1em;
      display: flex;
      align-items: center;
      justify-content: center;

      &-text{
        color: $chill;
        font-size: 1.4em;
        line-height: 1.6em;
      }

      &-button{
        background-color: $primary-no;
        color: $chill;
        border: none;
        padding: 0.7em 20% 0.7em 20%;
        border-radius: 1em;
        font-size: 1.2em;
        text-decoration: none;
        display: block;
        // width: fit-content;
        margin: 1.5em auto auto auto;
        letter-spacing: 0.1em;

        &:hover{
          background-color: $chill;
          color: $primary-no;
        }
      }

      &-controller{
        width: fit-content;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.514);
        padding: 1.5em 2em 1.5em 2em;
        border-radius: 1em;
      }
    }
  }

@media only screen and (min-width: 780px){
  .main{
    &__text{
      &-controller{
        margin: 0 0 0 40vmin;
      }
    }
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
