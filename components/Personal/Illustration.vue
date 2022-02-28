<script>
export default {
    data(){
        return{
            url: "/pics/personal/illustration/"
        }
    },
    computed: {
    }
}
</script>

<template>
<div class="display__controller">
    <div class="previewCard" v-for="index in 5" :key="index">
        <img :src="url+index+'.webp'" :alt="'illustration image no' + index" class="previewCard__image" />
    </div>
</div>
</template>

<style lang="scss" scoped>
    
</style>