<script>
export default {
    data(){
        return{
            url: "/pics/clients_work/comics_project/"
        }
    },
    computed: {
    }
}
</script>

<template>
<div class="display__controller">
    <div class="previewCard" v-for="index in 14" :key="index">
        <img :src="url+index+'.webp'" :alt="'Comics image no' + index" class="previewCard__image" height="100%" width="100%"/>
    </div>
</div>
</template>

<style lang="scss" scoped>
    
</style>