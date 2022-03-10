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
    <PreviewCard v-for="index in 22" :key="index" :url="url" :index="index" @handlePreviewOverlay="$emit('previewOverlayAction', {'index':index, name: 'strange_strokes'})"></PreviewCard>
</div>
</template>

<style lang="scss" scoped>
    
</style>