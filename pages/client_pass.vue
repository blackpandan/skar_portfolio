<script>
export default {
    methods: {
        convertS(value){
            return value.split(' ').join('')
        }
    },
    computed: {

        cssVars(){
            let base = "url(/pics/clients_work/";

            
            return [
                {
                    name: "Portrait",
                    styles: [
                        {'--bg-image': base+"portrait/18.webp)"}
                    ]
                }
                ,
                {
                    name: "Concept Art",
                    styles: [
                        {'--bg-image': base+"concept_art/22.webp)"}
                    ]
                },
                {
                    name: "Character Design",
                    styles: [
                        {'--bg-image': base+"character_design/12.webp)"}
                    ],
                },
                {
                    name: "Illustration",
                    styles: [
                        {'--bg-image': base+"illustration/14.webp)"}
                    ],
                },
                {
                    name: "Comics Project",
                    styles: [
                        {'--bg-image': base+"comics_project/1.webp)"}
                    ]
                }, 
            ];
        }
        
    }
}
</script>

<template>
<transition name="fade">
    <div class="controller">
        
        <NavBar :show="true" :x="false"></NavBar>
        <main class="main">
            <NuxtLink :to="{
                name:'client_arts', 
                params: {
                    activeComponent: convertS(item.name), 
                    weird: 'hello'
                    }
                }" 
            v-for="(item, index) in cssVars" :key="index" class="card" :style="item.styles">
                <div class="card__border">
                    <p class="card__text">{{ item.name }}</p>
                </div> 
            </NuxtLink>
        </main>
    </div>
</transition>
</template>

<style lang="scss" scoped>
    .main{
        position: relative;
        display: flex;
        flex-flow: row wrap;
        align-content: space-evenly;
        justify-content: center;
        place-items: center;
        min-height: 100%;
        margin: 0 0 auto 40vmin;
        padding: 5vmin 5vmin 2vmin 5vmin;
        z-index: 1;
        
    }



     .main::before{
        content: "";
        top: 0px;
        bottom: 0px;
        left: 40vmin;
        right: 0px;
        min-height: 100vh;
        position: fixed;
        // background-image: url("/pics/clients_work/concept_art/dead_us_i.webp");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        /* Resolve Opacity Issues*/ 
        opacity: 0.2;
        z-index: 1;
    }

    .card{
        position: relative;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        height: 18em;
        width: 14em;
        text-align: center;
        justify-content: center;
        align-items: center;
        padding: 0 0 0 0;
        // background-image: var(--bg-image);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        z-index: 2;
        border-radius: 0px;
        transition: box-shadow 0.2s, border-radius 0.2;    
        box-shadow: 1.5px 1.5px 2px 0px darken($color: $chill, $amount: 50);
        margin: 1em 0 0 5vmin;
        transition: border-radius 0.2s, background-position 1s, background-size 1s, box-shadow 0.2s;

        &__text{
            position: relative;
            font-family: "Fahkwang";
            color: rgb(255, 255, 255, 1);
            z-index: 2;
            text-align: center;
        }

        &:hover{
            border-radius: 0.5em;
            background-position: left center;
            background-size: 400px;
            box-shadow: 1.5px 1.5px 2px 0px darken($color: $primary, $amount: 20);
        }

        &__border{
            position: relative;
            text-align: center;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            top: 0em;
            left: 0em;
            bottom: 0;
            right: 0;
            height: calc(18em - 0.6em);
            width: calc(14em - 0.6em);
            border: none;
            border-radius: 0.5em;
            padding: 0 0 2.5em 0;
            transition: border 1.5s;

            &:hover{
                border: 1px solid white;
            }
        }
    }
</style>