<!-- /src/templates/Product.vue -->
<template>
  <Layout>
    <b-container>
      <b-row align-v="center">
      <vue-glide 
      :type="type" 
      :startAt="startAt" 
      :perView="perView" 
      :autoplay="autoplay" 
      :hoverpause="hoverpause"
      :breakpoints="breakpoints"
      :gap="gap"
      
      >
      <vue-glide-slide>
        <div class="new-card">
          <div class="new-card-img">
            <g-image src="~/assets/images/localdash.png" width="500"/>
          </div>
          <div class="mt-4 new-card-body" lg="4" xl="4" sm="12" xm="12">
            <b-row>
              <b-col>
                <div class="info mb-4">
                  <p class="h5 info-title text-center mb-4">Allgemeine Informationen</p>
                  <div class="info-single d-flex justify-content-evenly">
                    <p class="h6 info-sub-title">Unternehmen: </p>
                    <p class="info-text ml-5">Name</p>
                  </div>
                  <div class="info-single d-flex justify-content-evenly align-items-start">
                    <p class="h6 info-sub-title">Branche: </p>
                    <p class="info-text ml-5">Branche</p>
                  </div>
                </div>
                <div class="info mb-4">
                  <p class="h5 info-title text-center mb-4">Ihre Kontaktangaben</p>
                  <div class="info-single d-flex justify-content-evenly align-items-start">
                    <p class="h6 info-sub-title">Telefon: </p>
                    <p class="info-text ml-5">Telefon</p>
                  </div>
                  <div class="info-single d-flex justify-content-evenly align-items-start">
                    <p class="h6 info-sub-title">E-Mail: </p>
                    <p class="info-text ml-5">Mail</p>
                  </div>
                  <div class="info-single d-flex justify-content-evenly align-items-start">
                    <p class="h6 info-sub-title">Webseite: </p>
                    <p class="info-text ml-5">Webseite</p>
                  </div>
                  <div class="info-single d-flex justify-content-evenly align-items-start">
                    <p class="h6 info-sub-title">Adresse: </p>
                    <p class="info-text ml-5">Adresse, PLZ, Town</p>
                  </div>
                  <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15899.108677305778!2d7.9939793!3d4.9766619!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3a7cb7a8ef4cda5b!2sDomino&#39;s%20Pizza%20Uyo!5e0!3m2!1sen!2sng!4v1599942961585!5m2!1sen!2sng" width="100%" height="180" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                  </div>
                </div>
                <div class="info mb-4">
                  <p class="h5 info-title text-center mb-4">Weitere Informationen</p>
                  <div class="info-single d-flex justify-content-evenly align-items-start">
                    <p class="h6 info-sub-title">Schlagworte: </p>
                    <p class="info-text ml-5">Keywords</p>
                  </div>
                  <div class="info-single d-flex justify-content-evenly align-items-start">
                    <p class="h6">Angebotene Marken: </p>
                    <p class="info-text ml-5">Infos_yp</p>
                  </div>
                </div>
              </b-col>
            </b-row>
          </div>
        </div>
      </vue-glide-slide>
      <!--<vue-glide-slide>
        <div class="new-card">
          <div class="new-card-img">
            <g-image src="~/assets/images/duplex-2.jpeg" width="500"/>
          </div>
          <div class="mt-4 new-card-body" lg="4" xl="4" sm="12" xm="12">
            <b-row>
              <b-col>
                <p class="h3 new-card-title">Sample Data</p>
                <p class="new-card-sub">Hello World</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <p class="property-type">Sample Data</p>
                <p class="property-price">Hello World</p>
              </b-col>
              <b-col>
                <p class="property-type">Sample Data</p>
                <p class="property-price">Hello World</p>
              </b-col>
            </b-row>
          </div>
        </div>
      </vue-glide-slide>
      <vue-glide-slide>
        <div class="new-card">
          <div class="new-card-img">
            <g-image src="~/assets/images/duplex-2.jpeg" width="500"/>
          </div>
          <div class="mt-4 new-card-body" lg="4" xl="4" sm="12" xm="12">
            <b-row>
              <b-col>
                <p class="h3 new-card-title">Sample Data</p>
                <p class="new-card-sub">Hello World</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <p class="property-type">Sample Data</p>
                <p class="property-price">Hello World</p>
              </b-col>
              <b-col>
                <p class="property-type">Sample Data</p>
                <p class="property-price">Hello World</p>
              </b-col>
            </b-row>
          </div>
        </div>
      </vue-glide-slide>
      <vue-glide-slide>
        <div class="new-card">
          <div class="new-card-img">
            <g-image src="~/assets/images/duplex-2.jpeg" width="500"/>
          </div>
          <div class="mt-4 new-card-body" lg="4" xl="4" sm="12" xm="12">
            <b-row>
              <b-col>
                <p class="h3 new-card-title">Sample Data</p>
                <p class="new-card-sub">Hello World</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <p class="property-type">Sample Data</p>
                <p class="property-price">Hello World</p>
              </b-col>
              <b-col>
                <p class="property-type">Sample Data</p>
                <p class="property-price">Hello World</p>
              </b-col>
            </b-row>
          </div>
        </div>
      </vue-glide-slide>
      <vue-glide-slide>
        <div class="new-card">
          <div class="new-card-img">
            <g-image src="~/assets/images/duplex-2.jpeg" width="500"/>
          </div>
          <div class="mt-4 new-card-body" lg="4" xl="4" sm="12" xm="12">
            <b-row>
              <b-col>
                <p class="h3 new-card-title">Sample Data</p>
                <p class="new-card-sub">Hello World</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <p class="property-type">Sample Data</p>
                <p class="property-price">Hello World</p>
              </b-col>
              <b-col>
                <p class="property-type">Sample Data</p>
                <p class="property-price">Hello</p>
              </b-col>
            </b-row>
          </div>
        </div>
      </vue-glide-slide>-->
      <!--<template slot="control">
        <button data-glide-dir="<">prev</button>
        <button data-glide-dir=">">next</button>
      </template>-->
    </vue-glide>
      </b-row>  
    </b-container>
  </Layout>
</template>

<script>
import { Glide, GlideSlide } from 'vue-glide-js'
export default {
    name: 'carrousel',
    data() {
      return {
        perView: 2,
        startAt: 1,
        type: "carousel",
        autoplay: false,
        hoverpause: true,
        keyboard: true,
        bound: true,
        dragThreshold: 80,
        gap: 30,
        animationDuration: 200,
        info: null,
        breakpoints: {
          800: {
            perView: 1,
          },
        },
        
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          // Some Swiper option/callback...
        }
      }
    },

    components: {
        [Glide.name]: Glide,
        [GlideSlide.name]: GlideSlide
    },
    computed: {

    },
    methods: {
    },

}
</script>

<style scoped>

  .property {
        box-shadow: 1px 3px 20px rgb(53, 53, 53);
        height: 400px;
    }

    .property-link {
        color: #2c3e50;
        text-decoration: none;
    }

    .property-link:hover {
        color: #2c3e50;
        text-decoration: none;
    }

    .property .card-title {
        color: #2c3e50;
        text-transform: capitalize;
    }

    .property-type {
        color: #2c3e50;
        font-size: 0.8rem;
        margin: 0;
        padding: 0;
    }

    .property-price {
        color: #5eb9e5;
        font-size: 1.3rem;
        font-weight: 550;
        margin: 0;
        padding: 0;
    }

    .property-status {
        background: rgb(13, 145, 155);
        color: rgb(255, 255, 255);
        border-radius: 4px;
        font-size: 0.8rem;
        padding: 0.2rem 0.8rem;
        position: absolute;
        top: 0.8rem;
        right: 1.4rem;
    }

    .property-status-inactive {
        background: rgb(13, 145, 155);
        color: rgb(255, 255, 255);
    }

    .property-status-active {
        background: #5eb9e5;
        color: #ffffff;
    }


    img.card-img-top {
        height: 130px;
        max-height: 550px;
        object-fit: cover;
    }

    .new-card-img {
      border: 1px solid #5eb9e5;
      display: flex;
      overflow: hidden;
      height: 150px;
      padding: 0.3rem 0.3rem;
    }

    .new-card-img img{
      display: flex;
      border-radius: 6px;
      height: 150px;
      object-fit: cover;
      width: 100%;
    }

    .new-card-body {
      background: #fff;
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
      min-height: 320px;
      padding: 0.9rem 0.9rem;
      text-align: left;
    }

    .new-card-title {
      color: #2c3e50;
      text-align: left;
    }

    .new-card-sub {
      color: #6c757d;
      text-align: left;
    }


    .swiper-slide {
      border: 1px solid red;
      width: 120px;
    }

    .info-title {
      color: #5eb9e5;
      font-weight: bold;
      
    }

    .info-sub-title {
      font-weight: bold;
      text-align: right;
    }

    .info-text {
      font-weight: lighter !important;
    }

</style>