<script>
export default {
    props: {
        ham_hover: Boolean,
        ham_click: Boolean,
    }
}
</script>

<template>
    <div :class="[{'testburger__open':ham_hover}, {'testburger__click':ham_click},'testburger']"  @mouseenter="$emit('hamHoverAction')" @mouseleave="$emit('hamHoverAction')" @click="$emit('hamClickAction')">
                <span class="testburger__line testburger__line-1"></span>
                <span class="testburger__line testburger__line-2"></span>
                <span class="testburger__line testburger__line-3"></span>            
            </div>
</template>

<style lang="scss" scoped>
.testburger{
            width: fit-content;
            height: 1.7em;
            margin: 2.2em 0 0 2em;
            position: fixed;
            cursor: pointer;
            padding:  0.2em;    
            z-index: 99; 
        
        &__click{
            & .testburger__line{
                width: 1.4em;
                &-1{
                    background-color: $opa;
                    transform: translateY(180%) rotate(-45deg);
                }

                &-2{
                    width: 0;
                }

                &-3{
                    background-color: $opa;
                    transform: translateX(1%) rotate(45deg);
                }
            }
        }

        &__open{
            & .testburger__line{
                background-color: $primary;
            }

        }

        &__line{
            background-color: $opa;
            width: 1.4em;
            height: 0.158em;
            display: block;
            transition: width 0.1s, height 0.1s, transform 0.3s;

            &-2{
                transform: translateY(0.3em)
            }

            &-3{
                transform: translateY(0.7em)
            }
        }
    }

</style>