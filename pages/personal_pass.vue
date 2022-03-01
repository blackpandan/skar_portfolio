<script>
export default {
    methods: {
        convertS(value){
            return value.split(' ').join('')
        }
    },
    computed: {

        cssVars(){
            let base = "/pics/personal/";
            let cBase = "url(" + base ;
            
            return [
                {
                    name: "Painting",
                    url: base+"paintings/7.webp",
                    styles: [
                        {'--bg-image': cBase+"paintings/7.webp)"}
                    ]
                }
                ,
                {
                    name: "Illustration",
                    url: base+"illustration/3.webp",
                    styles: [
                        {'--bg-image': cBase+"illustration/3.webp)"}
                    ]
                },
                {
                    name: "Strange Strokes",
                    url: base+"strange_strokes/18.webp",
                    styles: [
                        {'--bg-image': cBase+"strange_strokes/18.webp)"}
                    ],
                },
                {
                    name: "Ink Challenge",
                    url: base+"ink_challenge/16.webp",
                    styles: [
                        {'--bg-image': cBase+"ink_challenge/16.webp)"}
                    ],
                },
                {
                    name: "Sketches",
                    url: base+"sketches/2.webp",
                    styles: [
                        {'--bg-image': cBase+"sketches/2.webp)"}
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
                name:'personal_arts', 
                params: {
                    activeComponent: convertS(item.name), 
                    weird: 'hello'
                    }
                }" 
            v-for="(item, index) in cssVars" :key="index" class="card" :rel="item.name">
             <img :src="item.url" alt="images for categories" class="card__image" width="100%" height="100%"/>
                <div class="card__border">
                    <i class="card__text">{{ item.name }}</i>
                </div>
            </NuxtLink>
        </main>
    </div>
</transition>
</template>

<style lang="scss" scoped>
</style>