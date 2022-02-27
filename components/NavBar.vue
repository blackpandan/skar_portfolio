 <template>
 <transition name="fade">
    <nav class="nav" v-show="show">
      <div class="nav__image">
        <img class="nav__image-pic" src="/pics/personal/paintings/skar.webp" />
      </div>
      <ul class="nav__links">
        <NuxtLink to="/" class="nav__links-link">HOME</NuxtLink>
        <NuxtLink to="/personal_pass" class="nav__links-link">PERSONAL ARTS</NuxtLink>
        <NuxtLink to="/client_pass" class="nav__links-link">CLIENTS WORK</NuxtLink>
        <NuxtLink to="/about" class="nav__links-link">ABOUT</NuxtLink>
        <NuxtLink to="/contact" class="nav__links-link">CONTACT</NuxtLink>
      </ul>
    </nav>
 </transition>
</template>

<script>
export default {
  props: ["show", "x"]
}
</script>

<style lang="scss" scoped>
    .nav{
    background-color: $chill ;
    box-shadow: 0px 0px 5px 2px $primary;
    // width: fit-content;
    position: fixed;
    min-height: 100vh;
    padding: 2em 6vmin 0 6vmin;
    width: 40vmin;
    z-index: 4;

    &__image{
      width: 12em;
      height: 12em;
      overflow: hidden;
      border-radius: 50%;
      margin: 1em auto 0 auto;

      &-pic{
        max-width: 100%;
      }

    }

    &__links{
      margin: 2.5em auto 0 auto;
      display: flex;
      flex-direction: column;
      &-link{
        color: $primary;
        font-family: "Roboto";
        font-weight: bold;
        font-size: 0.81em;
        margin: 0 0 0 0;
        letter-spacing: 0.17em;
        padding: 2vmin 0 2vmin 0;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        transition: 0.4s font-size, 0.4s color;
      
        &:hover{
            font-size: 0.9em;
          color: $opa;
        }
      
      }
    }
  }

  .fade-enter-active, .fade-leave-active {
  transition: all .4s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-10vmin); 
  opacity: 0;
}

</style>