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
    <PreviewCard v-for="index in 18" :key="index" :url="url" :index="index" @handlePreviewOverlay="$emit('previewOverlayAction', {'index':index, name: 'portrait'})"></PreviewCard>
    
</div>
</template>

<style lang="scss" scoped>
    
</style>