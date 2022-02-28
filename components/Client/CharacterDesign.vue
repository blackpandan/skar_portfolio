<script>
export default {
    data(){
        return{
            url: "/pics/clients_work/character_design/"
        }
    },
    computed: {
    }
}
</script>

<template>
<div class="display__controller">
    <div class="previewCard" v-for="index in 13" :key="index">
        <img :src="url+index+'.webp'" :alt="'characterDesign image no' + index" class="previewCard__image" />
    </div>
</div>
</template>

<style lang="scss" scoped>
    
</style>