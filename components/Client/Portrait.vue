<script>
export default {
    data(){
        return{
            url: "/pics/clients_work/portrait/"
        }
    },
    methods:{
        handlePreviewOverlay(){
            console.log("hello");
        }
    },
    computed: {
    }
}
</script>

<template>
<div class="display__controller">
    <!-- <div class="previewCard" v-for="index in 18" :key="index" @click="handlePreviewOverlay()">
        <img :src="url+index+'.webp'" :alt="'portrait image no' + index" class="previewCard__image" height="100%" width="100%" />
    </div> -->

    <PreviewCard v-for="index in 18" :key="index" :url="url" :index="index" @handlePreviewOverlay="$emit('previewOverlayAction', {'index':index, name: 'portrait'})"></PreviewCard>
    
</div>
</template>

<style lang="scss" scoped>
    
</style>