<script>
export default {
    data(){
        return{
            url: "/pics/personal/sketches/"
        }
    },
    computed: {
    }
}
</script>

<template>
<div class="display__controller">
   <PreviewCard v-for="index in 9" :key="index" :url="url" :index="index" @handlePreviewOverlay="$emit('previewOverlayAction', {'index':index, name: 'sketches'})"></PreviewCard>
</div>
</template>

<style lang="scss" scoped>
    
</style>