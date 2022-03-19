<script>
export default {
    
}
</script>

<template>
    <div class="mobNav">
        <h1 class="mobNav__header">Skar</h1>
    </div>
</template>

<style lang="scss" scoped>
.mobNav{
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 4em;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 0 0;
    background: linear-gradient(rgb(180, 180, 180), white);

    &__header{
        font-size: 1.5em;
    }
}
</style>