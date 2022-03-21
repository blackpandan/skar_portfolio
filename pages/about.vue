<script>
export default {
    head(){
        return{
            title: "About Me - Skar",
           
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

<div>
    <header>
         <NavBar :show="true" :x="false" v-if="$device.isDesktopOrTablet"></NavBar>

        <NavBar :show="nav" :x="nav" v-if="$device.isMobile"></NavBar>
        <MobNavBar v-if="$device.isMobile" ></MobNavBar>
    
    
        <transition name="overlayTrans"> 
            <div class="overlay" v-show="nav" @click="handleOverlay()"></div>
        </transition>
        <Hamburger v-if="$device.isMobile" :ham_hover="hamHover" :ham_click="hamClick" @hamHoverAction="handleHamHover()" @hamClickAction="handleHamClick()"/>
    
    </header>

    <main class="about__main">
        <section class="about__upperPart">
            <img class="about__upperPart-img" src="/pics/personal/paintings/5.webp" />
        </section>
        <section class="about__lowerPart">
            <h1>Elbuba Joshua ::: Skar</h1>
            <p>Also known as SKAR is a digital artist who has been drawing his entire life, though he only began drawing professionally in 2017.</p> <br />
            <p>He is a concept artist at SNOWSKETCH STUDIOS. For clients all over the world, he creates character designs, concept arts, and portrait paintings.</p><br />
            <p>After graduating, he decided to work as a freelancer, taking on odd jobs such as animation, game art, and promotional illustrations. His focus shifted over time, becoming increasingly centered on character design.</p><br />
            <p>In addition to his client work, he always prioritized his personal paintings and drawings in his spare time.</p><br />
        </section>
    </main>
</div>

</template>

<style lang="scss" scoped>
    .about{

        &__main{
            background-color: black;
            display: flex;
            padding: 4em 1em 0 1em;
            min-height: 100vh;
            flex-direction: column;
            align-items: center;

            & h1{
                padding: 1em 0 1em 0;
                text-align: center;
                // background-color: white;
                background: linear-gradient(to left, violet, rgb(120, 3, 204), rgb(75, 147, 255), green, yellow, orange, rgb(252, 0, 176));
                background-clip: text;
                color: transparent;
                font-size: 2em;
            }

            & p{
                text-align: left;
                color: darken($color:$chill, $amount: 16);
                font-size: 1.2em;
                line-height: 1.8em;
            }
        
        }

        &__upperPart{
            border-radius: 15vw;
            width: 50vw;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 2em 0 0 0;
            &-img{
                width: 100%;
            }
        }

        &__lowerPart{
            padding: 0 0 5em 0;
        }
    }

    @media only screen and (min-width: 780px){
        .about{
            &__main{
                margin: 0 0 0 40vmin;
                padding: 0 2em 0 2em;
                flex-direction: row-reverse;

                & h1{
                    text-align: left;
                    font-size: 3em;
                }

                & p{
                    color: darken($color: $chill, $amount: 40);
                    font-size: 1.4em;
                }
            }

            &__upperPart{
                    // margin: 0 auto 0 0;
                    border-radius: 0;
                    position: fixed;
                    left: 40%;
                    right:0;
                    width: 35vw;
                    z-index: 0;
                    display: none;
                    &-img{
                        margin: 0 0 0 0;
                        display: none;
                    }
                }

            &__lowerPart{
                background-color: rgba(0, 0, 0, 0.507);
                position: relative;
                width: 100vw;
                height: 100vh;
                margin: 0 0vmin 0 0;
                padding: 3em 5vmin 0 5vmin; 
            }
        }
    }
</style>