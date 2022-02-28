<template>
  <div class="controller">
    <NavBar :show="true" :x="false"></NavBar>
    <main class="main_home">
      <!-- <img class="main__image" src="/pics/clients_work/portrait/flower_girl.webp"/> -->
    </main>
</div>
</template>

<script>
export default {
  name: 'IndexPage',
  head(){
    return{
      title: "Skar Professional Artist",
      meta: [
              {
                hid: "description",
                name: "description",
                content: "I'm skar a professional artist who makes use of digital and tradition medium"
              },
              {
                hid: 'canonical',
                rel: 'canonical',
                href: '',
              },{
        hid: 'og:title',
        property: 'og:title',
        content: 'Skar Professional Artist',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'I`m skar a professional artist who makes use of digital and tradition medium',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/pics/personal/paintings/5.webp',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://thenextbit.de/'
      },
      {
        property: 'og:locale',
        content: 'en_NG',
      },
      ]
    }
  }
}
</script>

<style lang="scss">

  /* fonts */
  @font-face {
    font-family: romanD;
    src: url("/fonts/RomanD.woff2");
  }

  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=Fahkwang:wght@400&display=swap');

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  li{
    text-decoration: none;
    list-style-type: none;
  }

  .controller{
    display: flex;
    background-color: $opa;
    min-height: 100vh;
  }


  
  .main_home{
    width: 180vmin;
    margin: 0 0 0 40vmin;
    min-height: 100vh;
    background-image: url("/pics/clients_work/portrait/18.webp");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
</style>
