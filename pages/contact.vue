<script>
export default {
  data() {
    return {
      nav: false,
      hamHover: false,
      hamClick: false,
    };
  },
  methods: {
    handleHamClick() {
      this.nav = !this.nav;
      this.hamClick = !this.hamClick;
    },
    handleHamHover() {
      this.hamHover = !this.hamHover;
    },
    handleOverlay() {
      this.nav = !this.nav;
      this.hamClick = !this.hamClick;
    },
  },
};
</script>

<template>
  <div class="contact__controller">
    <header>
      <NavBar :show="true" :x="false" v-if="$device.isDesktopOrTablet"></NavBar>

      <NavBar :show="nav" :x="nav" v-if="$device.isMobile"></NavBar>
      <MobNavBar v-if="$device.isMobile"></MobNavBar>

      <transition name="overlayTrans">
        <div class="overlay" v-show="nav" @click="handleOverlay()"></div>
      </transition>
      <Hamburger
        v-if="$device.isMobile"
        :ham_hover="hamHover"
        :ham_click="hamClick"
        @hamHoverAction="handleHamHover()"
        @hamClickAction="handleHamClick()"
      />
    </header>

    <main class="contact__innerController">
      <section class="contact__innerController-upper">
        <h1 class="contact__head">Contact me</h1>
          <p class="contact__subhead">
            Feel free to ask me questions and talk about business inquires
          </p>
      </section>

      <section class="contact__innerController-lower">
        <form class="contact__form" action="mailto:gktechville@gmail.com">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            class="contact__form-input"
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Your Email"
            class="contact__form-input"
          />
          <textarea name="message" id="" class="contact__form-input">
Message</textarea
          >
          <input type="submit" value="send" class="contact__form-submit" />
        </form>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.contact {

  &__head{
      color: $chill;
      margin:  2.5em 0 0 0;
      font-size: 2em;
  }

  &__subhead{
      color: darken($chill, 20);
      padding: 1em 0 2em 0;
  }
  
  &__controller {
    background-color: black;
    width: 100vw;
    height: 100vh;
    padding: 0 0 0 0;
  }

  &__innerController{
      padding: 4em 7vw 0 7vw;
  }

  &__form{
      display: flex;
      flex-direction: column;
      align-items: center;

      &-input{
          font-size: 1em;
          padding: 0.7em 0 0.7em 1em;
          border-radius: 1em;
          border: 1.5px solid white;
          background-color: rgba(255, 255, 255, 0.151);
          width: 100%;
          outline: none;
          color: rgb(196, 196, 196);
          

          &:focus{
              border: 2px solid $primary-no
          }
          
          &::placeholder{
            color: rgb(196, 196, 196);
          }

          &:not(:first-child){
              margin:  1.5em 0 0 0;
          }
      }

      &-submit{
          margin: 2.5em 0 0 0;
          width: fit-content;
          padding: 0.7em 20vw 0.7em 20vw;
          border-radius: 1em;
          background-color: $primary-no;
          color: $chill;
          border: none;
          font-size: 1.1em;
          letter-spacing: 0.1em;

          &:hover{
              background-color: $chill;
              color: $primary-no;
          }
      }
  }
}
</style>