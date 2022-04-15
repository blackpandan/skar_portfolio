<script>
export default {
  data() {
    return {
      nav: false,
      name: "",
      email: "",
      message: "",
      hamHover: false,
      hamClick: false,
      response: null,
      classStatus:  false,
    };
  },
  methods: {
    sendEmail(){
      console.log(this.$refs.status.class);
      // console.log(this.fetc);
      const url = "https://formspree.io/f/xqknydoz";
      const options = {
        method: "post",
        headers: {
          'Accept':"application/json"
        },
        data:{
          name: this.name,
          email: this.email,
          message: this.message
        }
      }
      this.$axios.$post(url, options.data).then((res) =>{
        console.log(res);
        this.classStatus = false;
        this.response = "Email Has Been Sent Thanks";
    }).catch((err)=>{
      console.log(err);
      this.classStatus = true;
      this.response = "Ooops Something went wrong";
    });
    },
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
            Feel free to ask me questions regarding artworks, commissions and business inquiries
          </p>
      </section>

      <section class="contact__innerController-lower">
        <form class="contact__form" name="contact" v-on:submit.prevent="sendEmail" method="POST" target="_blank">
          <input
            type="text"
            name="subject"
            placeholder="Your Name"
            class="contact__form-input"
            v-model="name"
          />
          <input
            type="text"
            name="email"
            id=""
            placeholder="Your Email"
            class="contact__form-input"
            v-model="email"
          />
          <textarea placeholder="Message" name="message" id="" class="contact__form-input" v-model="message">
</textarea
          >
          <input type="submit" value="send" class="contact__form-submit"
          />
          <p :class="['status',{'status--error': classStatus}]" ref="status">{{response}}</p>
        </form>
      </section>
    </main>

    <section class="socialLinks">
       <a href="https://patreon.com/skar" class="socialLinks__link"><i class="fa-brands fa-patreon"></i></a>
        <a href="https://twitter.com/elbuba_joshua" class="socialLinks__link"><i class="fa-brands fa-twitter"></i></a>
        <a href="https://instagram.com/i.am.skar" class="socialLinks__link"><i class="fa-brands fa-instagram"></i></a>
    </section>
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
      line-height: 1.6em;
  }
  
  &__controller {
    background-color: black;
    width: 100vw;
    height: 100vh;
    padding: 0 0 0 0;

    .status{
      width: 90%;
      padding: 1vh 0 1vh 2vmin;
      position: absolute;
      bottom: -2vh;
      color: $chill;
      font-size: calc(1em + 1vmin);
      transform: translateY(100%);

      &--error{
        color: red;
      }
    }
  }

  &__innerController{
      padding: 4em 7vw 0 7vw;
      min-height:100vh;

      &-lower{
        position: relative;
      }
  }

  &__form{
      display: flex;
      flex-direction: column;
      align-items: center;

      &-input{
        font-family: "Roboto";
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
          width: 90%;
          padding: 0.7em 0 0.7em 0;
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

@media only screen and (min-width: 780px){
    .contact{

        &__head{
            font-size: 3em;
            margin: 0;
        }

        &__subhead{
            font-size: 1.2em;
            color: darken($chill, 40);
            line-height: 1.5em;
        }
        &__innerController{
            width: 60vw;
            margin: 0 0 0 40vmin;
        }
    }
}

.socialLinks{
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  &__link{
    color: grey;
    font-size: 1.8em;

   

    &:not(:first-child){
      margin: 0 0 0 1em;
    }


  }
}

@media only screen and (min-width:780px){
  .socialLinks{
    display: none;
  }
}
</style>
