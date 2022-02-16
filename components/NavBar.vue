 <template>
 <nav class="nav">
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
</template>

<style lang="scss" scoped>
    .nav{
    background-color: #ffffff ;
    box-shadow: 0px 0px 5px 2px rgb(196, 194, 194);
    width: fit-content;
    min-height: 100vh;
    padding: 2em 6vmin 0 6vmin;
    width: 40vmin;

    &__image{
      width: 12em;
      height: 12em;
      overflow: hidden;
      border-radius: 50%;
      margin: 0 auto 0 auto;

      &-pic{
        max-width: 100%;
      }

    }

    &__links{
      margin: 2.5em auto 0 auto;
      display: flex;
      flex-direction: column;
      &-link{
        color: #8a2ea7c5;
        font-family: "Roboto";
        font-weight: bold;
        font-size: 0.81em;
        margin: 0 0 0 0;
        letter-spacing: 0.17em;
        padding: 2vmin 0 2vmin 0;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
      
        &:hover{
            font-size: 0.87em;
          color: black;
        }
      
      }
    }
  }
</style>