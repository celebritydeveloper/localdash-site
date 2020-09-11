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
            <g-image src="~/assets/images/duplex-2.jpeg" width="500"/>
          </div>
          <div class="mt-4 new-card-body" lg="4" xl="4" sm="12" xm="12">
            <b-row>
              <b-col>
                <p class="h3 new-card-title">{{$context.title}}</p>
                <p class="new-card-sub">${{$context.price}}</p>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <p class="property-type">Sample Data</p>
                <p class="property-price">{{$context.color}}</p>
              </b-col>
              <b-col>
                <p class="property-type">Sample Data</p>
                <p class="property-price">{{$context.location}}</p>
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
      border-radius: 6px;
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

</style>