<script>
export default {
    data(){
        return{
            url: "/pics/personal/strange_strokes/"
        }
    },
    computed: {
    }
}
</script>

<template>
<div class="display__controller">
    <div class="previewCard" v-for="index in 22" :key="index">
        <img :src="url+index+'.webp'" :alt="'strangeStrokes image no' + index" class="previewCard__image" />
    </div>
</div>
</template>

<style lang="scss" scoped>
    
</style>