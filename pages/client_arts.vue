<script>
export default {
    data(){
        return{
            tuts: false,
            nav: false,
            active: "Portrait",
            activeClass: {
                Portrait: true,
                ConceptArt: false,
                CharacterDesign: false,
                Illustration: false,
                ComicsProject: false
            },
            hamHover: false,
            hamClick: false,
            activeHam: [
                'fa-xmark',
                'xmark'
            ],
            previewOverlay: false,
            gotten: {}
        }
    },
    methods:{
        activate(value){
           this.active = "Client"+value ;
           this.nav = false;
           let classes = this.activeClass;

           for (const key in classes){
             if (value == key){
                 this.activeClass[key] = true;
             }else if(value != key){
                 this.activeClass[key] = false;
             }
             ;

           };
        },
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
        handlePreviewOverlay(value){
            console.log(value);
            this.gotten = value;
            this.previewOverlay = true;
            // this.gottenIndex = value;
        },
        closePreviewOverlay(){
            console.log("closed")
            this.previewOverlay = false;
        }
    },
    created(){
        console.log(this.active);
        var vm = this;
        
        function charge(value){
            vm.active = "Client"+value ;
            vm.nav = false;
            
        };


        if ( Boolean(this.$route.params.activeComponent) == true ){
            console.log("yep")
            let classes = this.activeClass;
            for (const key in classes){
                //  console.log(key);
                let stace = this.$route.params.activeComponent;
                
                charge(stace);
                if (stace == key){
                    this.activeClass[key] = true;
                }else if(stace != key){
                    this.activeClass[key] = false;
                }
                ;

            };
        }else{
            console.log("nope")
            let stace = "Portrait";
            charge(stace)
        }
        // let value = this.$route.params.activeComponent;

        //    let updatedValue = value.toLowerCase()
        //    console.log(updatedValue)

    }
}
</script>

<template>
    <div class="controller_2">
        <NavBar :show="nav" :x="nav"></NavBar>
        <transition name="overlayTrans"> 
            <div class="overlay" v-show="nav" @click="handleOverlay()"></div>
        </transition>

        <Hamburger :ham_hover="hamHover" :ham_click="hamClick" @hamHoverAction="handleHamHover()" @hamClickAction="handleHamClick()"></Hamburger>

        <div class="inner_controller">
        <header :class="['display__scroll', 'header']">
            <ul class="header__links">
                <li @click="activate('Portrait')" :class="[{'active': activeClass.Portrait},'header__links-link']">portrait</li>
                <li @click="activate('ConceptArt')" :class="[{'active': activeClass.ConceptArt},'header__links-link']">Concept</li>
                <li @click="activate('CharacterDesign')" :class="[{'active': activeClass.CharacterDesign},'header__links-link']">Character</li>
                <li @click="activate('Illustration')" :class="[{'active': activeClass.Illustration},'header__links-link']">Illustration</li>
                <li @click="activate('ComicsProject')" :class="[{'active': activeClass.ComicsProject},'header__links-link']">Comics</li>
            </ul> 
        </header>
        <main :class="['display']" >
            <NuxtDynamic :component="active" loading="eager" @previewOverlayAction="handlePreviewOverlay" />
        </main>

        </div>

        <transition-group name="previewOverlayTrans" tag="div">
        <div class="previewOverlay" v-if="previewOverlay" @click="closePreviewOverlay()" key="overlay">
            <div class="previewOverlay__closeCover" @click="closePreviewOverlay()">
                <span class="previewOverlay__close previewOverlay__close-1"></span>
                <span class="previewOverlay__close previewOverlay__close-2"></span>
            </div>
        </div>
            <img :src="'/pics/clients_work/'+ gotten.name +'/'+ gotten.index +'.webp'" :alt="gotten.name + gotten.index" :key="gotten.index" class="previewOverlay__image" v-if="previewOverlay">
        </transition-group>
    </div>    
</template>



<style lang="scss" scoped>
    .controller_2{
        display: flex;
    }

    .inner_controller{
        display: flex;
        flex-direction: column;
        width: 100%;
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

    .testburger{
            width: fit-content;
            height: 1.7em;
            margin: 2.2em 0 0 2em;
            position: fixed;
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
            transition: width 0.1s, height 0.1s, transform 0.3s;

            &-2{
                transform: translateY(0.3em)
            }

            &-3{
                transform: translateY(0.7em)
            }
        }
    }

    .active{
        color: $primary;
        text-shadow: 1px 0px 0px lighten($color: $opa, $amount: 60);
        transition: all 0.7s;

        &:hover{
            color: $primary;
        }
    }

    .hamburger{
        font-size: 1.25em;
        cursor: pointer;
        transition: 0.3s font-size;
        position: fixed;
        margin: 1.7em 0 0 5vmin;
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
                transition: 0.4s font-weight, 0.3s text-shadow, 0.5s color;

                &:not(:nth-of-type(1)){
                    margin: 0 0 0 2em;
                }

                &:hover{
                    text-decoration: underline;
                    text-shadow: 1px 0px 0px black;
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
        margin: 4em 0 auto 0;
        padding: 1em 2em 4em 2em;
        z-index: 1;
        background-color: $chill;
        min-height: calc(130vh - 6em);
        
        &__scroll{
            box-shadow: 0px 1px 0.3em 0px lighten($color: $primary, $amount: 18);
        }
    }
</style>