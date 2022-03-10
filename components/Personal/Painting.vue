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
  <PreviewCard v-for="index in 13" :key="index" :url="url" :index="index" @handlePreviewOverlay="$emit('previewOverlayAction', {'index':index, name: 'paintings'})"></PreviewCard>
</div>
</template>

<style lang="scss" scoped>
    
</style>