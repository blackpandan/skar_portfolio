<script>
export default {
     data(){
    return {
      nav: false,
      hamHover: false,
      hamClick: false
    }
    },
    methods: {
        convertS(value){
            return value.split(' ').join('')
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
    }
  },
    computed: {

        cssVars(){
            let base = "/pics/personal/";
            let cBase = "url(" + base ;
            
            return [
                {
                    name: "Painting",
                    url: base+"paintings/1.webp",
                    styles: [
                        {'--bg-image': cBase+"paintings/1.webp)"}
                    ]
                }
                ,
                {
                    name: "Illustration",
                    url: base+"illustration/1.webp",
                    styles: [
                        {'--bg-image': cBase+"illustration/1.webp)"}
                    ]
                },
                {
                    name: "Strange Strokes",
                    url: base+"strange_strokes/1.webp",
                    styles: [
                        {'--bg-image': cBase+"strange_strokes/1.webp)"}
                    ],
                },
                {
                    name: "Ink Challenge",
                    url: base+"ink_challenge/1.webp",
                    styles: [
                        {'--bg-image': cBase+"ink_challenge/1.webp)"}
                    ],
                },
                {
                    name: "Sketches",
                    url: base+"sketches/1.webp",
                    styles: [
                        {'--bg-image': cBase+"sketches/1.webp)"}
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
        
        <NavBar :show="true" :x="false" v-if="$device.isDesktopOrTablet"></NavBar>

    <NavBar :show="nav" :x="nav" v-if="$device.isMobile"></NavBar>
    <MobNavBar v-if="$device.isMobile" ></MobNavBar>

    <Hamburger v-if="$device.isMobile" :ham_hover="hamHover" :ham_click="hamClick" @hamHoverAction="handleHamHover()" @hamClickAction="handleHamClick()"/>
        
        <main class="main">
            <NuxtLink :to="{
                name:'personal_arts', 
                params: {
                    activeComponent: convertS(item.name), 
                    weird: 'hello'
                    }
                }" 
            v-for="(item, index) in cssVars" 
            :key="index" 
            class='card'
            
            :rel="item.name"
            >
             <img :src="item.url" 
                alt="images for categories" 
                :class="['card__image']" 
                width="100%" 
                height="100%" 
                />
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