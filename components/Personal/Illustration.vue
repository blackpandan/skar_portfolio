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
    <PreviewCard v-for="index in 5" :key="index" :url="url" :index="index" @handlePreviewOverlay="$emit('previewOverlayAction', {'index':index, name: 'illustration'})"></PreviewCard>
</div>
</template>

<style lang="scss" scoped>
    
</style>