<script>
export default {
    data(){
        return{
            url: "/pics/personal/paintings/"
        }
    },
    computed: {
    }
}
</script>

<template>
<div class="display__controller">
    <div class="previewCard" v-for="index in 13" :key="index">
        <img :src="url+index+'.webp'" :alt="'Painting image no' + index" class="previewCard__image" height="100%" width="100%"/>
    </div>
</div>
</template>

<style lang="scss" scoped>
    
</style>