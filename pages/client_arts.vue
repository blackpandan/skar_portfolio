<template>
    <div class="controller_2">
        <NavBar :show="nav" :x="nav"></NavBar> 
        <header class="header">
            <ul class="header__links">
                <li @click="active = 'ConceptArt'" class="header__links-link">Concept</li>
                <li @click="active = 'CharacterDesign'" class="header__links-link">Character</li>
                <li @click="active = 'Illustration'" class="header__links-link">Illustration</li>
                <li @click="active = 'Portrait'" class="header__links-link">portrait</li>
                <li @click="active = 'Comics'" class="header__links-link">Comics</li>
            </ul> 
            <i class="fa-solid fa-bars hamburger" v-show="!nav" @click="nav = !nav"></i>  
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
</template>

<script>
export default {
    data(){
        return{
            tuts: false,
            nav: false,
            active: "Portrait"
        }
    }
}
</script>

<style lang="scss" scoped>
    .hamburger{
        font-size: 1.22em;
        cursor: pointer;
        transition: 0.3s font-size;
        align-self: start;
        // margin: 0 auto 0 0;
        &:hover{
            font-size: 1.4em;
        }
    }

    .header{
        display: flex;
        flex-direction: column;
        background-color: $chill;
        padding: 2.5em 0 2.5em 7vmin;
        align-items: center;
        box-sizing: none;

        &__links{
            display: flex;
            // margin: 0 auto 0 auto;
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
</style>