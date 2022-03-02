<template>
    <div class="controller_2">
        <NavBar :show="nav" :x="nav"></NavBar>
        <transition name="overlayTrans"> 
            <div class="overlay" v-show="nav" @click="handleOverlay()"></div>
        </transition>
            <Hamburger :ham_hover="hamHover" :ham_click="hamClick" @hamHoverAction="handleHamHover()" @hamClickAction="handleHamClick()"/>

        <div class="inner_controller">
        <header :class="['display__scroll', 'header']">
            <ul class="header__links">
                <li @click="activate('Painting')" :class="[{'active': activeClass.Painting},'header__links-link']">painting</li>
                <li @click="activate('Sketches')" :class="[{'active': activeClass.Sketches},'header__links-link']">sketches</li>
                <li @click="activate('InkChallenge')" :class="[{'active': activeClass.InkChallenge},'header__links-link']">Challenge</li>
                <li @click="activate('Illustration')" :class="[{'active': activeClass.Illustration},'header__links-link']">Illustration</li>
                <li @click="activate('StrangeStrokes')" :class="[{'active': activeClass.StrangeStrokes},'header__links-link']">strange_strokes</li>
            </ul> 
        </header>
        <main :class="['display']" >
            <NuxtDynamic :component="active" loading="eager"/>
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
            active: "Painting",
            activeClass: {
                Painting: true,
                InkChallenge: false,
                Sketches: false,
                Illustration: false,
                StrangeStrokes: false
            },
            hamHover: false,
            hamClick: false,
            activeHam: [
                'fa-xmark',
                'xmark'
            ],
            displayScroll: false
        }
    },
    methods:{
        activate(value){
           this.active = "Personal"+value ;
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
            console.log("omo bab");
            this.nav = !this.nav;
            this.hamClick = !this.hamClick;
        },
        handleHamHover(){
            console.log("yea");
            this.hamHover = !this.hamHover;
        },
        handleOverlay(){
            this.nav = !this.nav;
            this.hamClick = !this.hamClick;        
            },
        displayScrollAction(){
            this.displayScroll = !this.displayScroll;
            console.log('i don tire for')
        }
    },
    created(){
        console.log(this.active);
        var vm = this;
        
        function charge(value){
            vm.active = "Personal"+value ;
            vm.nav = false;
            
        };


        if ( Boolean(this.$route.params.activeComponent) == true ){
            console.log("yep")
            let classes = this.activeClass;
            for (const key in classes){
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
            let stace = "Painting";
            charge(stace)
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