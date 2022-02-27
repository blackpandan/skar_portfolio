<template>
    <div class="controller_2">
        <NavBar :show="nav" :x="nav"></NavBar> 
        <!-- <i :class="[ham ? activeHam : 'fa-bars', 'fa-solid', 'hamburger']"  @click="hamburgerAction()"></i>   -->
            <div :class="[{'testburger__open':hamHover}, {'testburger__click':hamClick},'testburger']"  @mouseenter="hamHover = !hamHover" @mouseleave="hamHover = !hamHover" @click="hamburgerAction()">
                <span class="testburger__line testburger__line-1"></span>
                <span class="testburger__line testburger__line-2"></span>
                <span class="testburger__line testburger__line-3"></span>            
            </div>

        <div class="inner_controller">
        <header class="header">
            <ul class="header__links">
                <li @click="activate('Portrait')" class="header__links-link">portrait</li>
                <li @click="activate('ConceptArt')" class="header__links-link">Concept</li>
                <li @click="activate('CharacterDesign')" class="header__links-link">Character</li>
                <li @click="activate('Illustration')" class="header__links-link">Illustration</li>
                <li @click="activate('ComicsProject')" class="header__links-link">Comics</li>
            </ul> 
        </header>
        <main class="display">
            <!-- <LazyIllustration keep-alive v-if="tuts"></LazyIllustration>
            <LazyComics keep-alive v-if="tuts"></LazyComics>
            <LazyConceptArts keep-alive v-if="tuts"></LazyConceptArts>
            <LazyCharacterDesign keep-alive v-if="tuts"></LazyCharacterDesign>
            <LazyPortrait keep-alive v-if="tuts"></LazyPortrait> -->
            <NuxtDynamic :component="active" />
        </main>
        </div>
    </div>    
</template>

<script>
export default {
    data(){
        return{
            tuts: false,
            nav: false,
            active: "Portrait",
            hamHover: false,
            hamClick: false,
            activeHam: [
                'fa-xmark',
                'xmark'
            ]
        }
    },
    methods:{
        activate(value){
           this.active = value ;
           this.nav = false;
        },
        hamburgerAction(){
            this.nav = !this.nav;
            this.hamClick = !this.hamClick;
        }
    }
}
</script>

<style lang="scss" scoped>
    .controller_2{
        display: flex;
    }

    .inner_controller{
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .testburger{
            width: fit-content;
            height: 1.7em;
            margin: 2.2em 0 0 2em;
            position: fixed;
            // background-color: blue;
            
            cursor: pointer;
            padding:  0.2em;    
            z-index: 99; 
        
        &__click{
            & .testburger__line{
                width: 1.4em;
                &-1{
                    background-color: $opa;
                    transform: translateY(180%) rotate(-45deg);
                }

                &-2{
                    width: 0;
                }

                &-3{
                    background-color: $opa;
                    transform: translateX(1%) rotate(45deg);
                }
            }
        }

        &__open{
            & .testburger__line{
                background-color: $primary;
            }

        }

        &__line{
            background-color: $opa;
            width: 1.4em;
            height: 0.158em;
            display: block;
            // transform: translate(-50%, -50%);
            transition: width 0.1s, height 0.1s, transform 0.3s;

            &-2{
                transform: translateY(0.3em)
            }

            &-3{
                transform: translateY(0.7em)
            }
        }
    }

    .hamburger{
        font-size: 1.25em;
        cursor: pointer;
        transition: 0.3s font-size;
        position: fixed;
        margin: 1.7em 0 0 5vmin;
        // z-index: 99;
        transition: 0.3s;
        &:hover{
            transform: scale(1.25)
        }
    }

    .header{
        display: flex;
        flex-direction: row;
        width: 100vw;
        background-color: $chill;
        padding: 2.5em 0 2.5em 0vmin;
        align-items: center;
        // justify-content: center;
        box-sizing: none;
        position: fixed;
        z-index: 2;
        

        &__links{
            display: flex;
            padding: 0 0 0 10vmin ;   
            margin: 0 auto 0 auto;
            &-link{
                cursor: pointer;
                text-decoration: none;
                list-style-type: none;
                text-transform: uppercase;
                letter-spacing: 0.2em;
                font-weight: normal;
                text-decoration: none;
                font-size: 0.85em;
                transition: 0.4s font-weight;

                &:not(:nth-of-type(1)){
                    margin: 0 0 0 2em;
                }

                &:hover{
                    text-decoration: underline;
                    font-weight: bold; 
                }
            }
        }
    }

    .xmark{
        &:hover{
            color: $secondary;
            transform: scale(1.37);
        }
    }


    .display{
        position: relative;
        margin: 6em 0 0 0;
        padding: 1em 0 0 2em;
        z-index: 1;
        background-color: green;
    }
</style>