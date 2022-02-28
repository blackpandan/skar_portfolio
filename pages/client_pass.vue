<script>
export default {
    methods: {
        convertS(value){
            return value.split(' ').join('')
        }
    },
    computed: {

        cssVars(){
            let base = "/pics/clients_work/";
            let cBase = "url(" + base ;

            
            return [
                {
                    name: "Portrait",
                    url: base+"portrait/7.webp",
                    styles: [
                        {'--bg-image': cBase+"portrait/7.webp)"}
                    ]
                }
                ,
                {
                    name: "Concept Art",
                    url: base+"concept_art/22.webp",
                    styles: [
                        {'--bg-image': cBase+"concept_art/22.webp)"}
                    ]
                },
                {
                    name: "Character Design",
                    url: base + "character_design/12.webp",
                    styles: [
                        {'--bg-image': cBase+"character_design/12.webp)"}
                    ],
                },
                {
                    name: "Illustration",
                    url: base + "illustration/14.webp",
                    styles: [
                        {'--bg-image': cBase+"illustration/14.webp)"}
                    ],
                },
                {
                    name: "Comics Project",
                    url: base + "illustration/14.webp",
                    styles: [
                        {'--bg-image': cBase+"comics_project/1.webp)"}
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
            v-for="(item, index) in cssVars" :key="index" class="card" :style="item.styles" :rel="item.name">
                <img :src="item.url" alt="images for categories" class="card__image"/>
                <div class="card__border">
                    <i class="card__text">{{ item.name }}</i>
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
        padding: 1vmin 5vmin 1vmin 5vmin;
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
        background-image: url("/pics/clients_work/concept_art/dead_us_i.webp");
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
        /* Resolve Opacity Issues*/ 
        opacity: 0.1;
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
        // background-repeat: no-repeat;
        // background-position: center center;
        // background-size: cover;
        z-index: 2;
        border-radius: 0.5em;
        transition: box-shadow 0.2s, border-radius 0.2;    
        box-shadow: 1.5px 1.5px 2px 0px darken($color: $chill, $amount: 10);
        margin: 2em 0 0 5vmin;
        transition: border-radius 0.2s, background-position 1s, background-size 1s, box-shadow 0.2s;
        font-style: normal;
        overflow: hidden;

        &__text{
            font-family: "Fahkwang";
            color: rgb(255, 255, 255, 1);
            z-index: 2;
            text-align: center;
            font-style: inherit;
        }

        &:hover{
            border-radius: 0.5em;
            background-position: right center;
            border: 1px solid darken($color: $chill, $amount: 60);
            box-shadow: none;
            font-style: italic;
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
            height: calc(18em - 0.8em);
            width: calc(14em - 0.8em);
            border: none;
            border-radius: 0.5em;
            padding: 0 0 2.5em 0;
            background-color: none;
            transition: border 1.5s;


            &:hover{
                border: 1px solid white;
                background-color: rgba(0, 0, 0, 0.699);
            }
        }

        &__image{
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
            object-position: center center;
        }
    }
</style>