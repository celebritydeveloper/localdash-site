<template>
  <Layout>
    <b-container>
      <b-row align-v="center">
        <div class="new-card-img">
          <b-row>
            <b-col>
              <g-image src="~/assets/images/localdash-1.png"/>
            </b-col>
          </b-row>
        </div>
        <b-container class="text-center mt-3">
          <b-row>
            <b-col>
              <b-button @click.prevent="slidePrev" size="lg"> &lt; ZURÜCK </b-button>
            </b-col>
            <b-col>
              <b-button @click.prevent="slideNext" size="lg">WEITER &gt; </b-button>
            </b-col>
          </b-row>
      </b-container>
      <hooper ref="carousel" @slide="updateCarousel" class="mb-3"  style="height: 100vh;">
        <slide>
          <div class="new-card">    
            <div class="mt-4 new-card-body" lg="4" xl="4" sm="12" xm="12">
              <b-row>
                <b-col>
                  <div class="info mb-4">
                    <p class="h5 info-title text-left mb-4">Allgemeine Informationen</p>
                    <center>
                    <table style="width:90%" class="fixed">
                        <col width="40%" />
                            <tr>
                              <th>Name</th>
                              <td>{{$context.name}}</td>
                            </tr>
                            <tr>
                              <th>Branche</th>
                              <td>{{$context.branch}}</td>
                            </tr>
                        </table>
                      </center>  
                  </div>
                  <div class="info mb-4">
                    <p class="h5 info-title text-left mb-4">Ihre Kontaktangaben</p>
                    <center>
                    <table style="width:90%" class="fixed">
                        <col width="40%" />
                        
                            <tr>
                              <th>Telefon</th>
                              <td v-if="$context.phone != ''">{{$context.phone}}</td>
                              <td v-else>No phone number found</td>
                            </tr>
                            <tr>
                              <th>E-Mail</th>
                              <td>{{$context.email}}</td>
                            </tr>
                            <tr>
                              <th>Webseite</th>
                              <td>{{$context.website}}</td>
                            </tr>
                            <tr>
                              <th>Adresse</th>
                              <td>{{$context.address}}<br>{{$context.postal}} {{$context.town}}</td>
                            </tr>
                          </table>
                          <div>
                            <iframe
                              width="100%"
                              height="180"
                              frameborder="0" style="border:0"
                              aria-hidden="false" 
                              tabindex="0"
                              allowfullscreen=""
                              :src="`https://www.google.com/maps/embed/v1/search?key=AIzaSyCS2L4dKZ2g10zGbFKTxnV4jlOSWqUwAaE&q=${$context.address} + ${$context.town}&zoom=18`">
                            </iframe>
                          </div>
                  </center>
                  </div>
                  <div class="info mb-4">
                    <p class="h5 info-title text-left mb-4">Weitere Informationen</p>
                    <center>
                    <table style="width:90%" class="fixed">
                        <col width="40%" />
                        
                            <tr>
                              <th>Angebotene Marken</th>
                              <td>{{$context.brands}}</td>
                            </tr>
                            <br>
                            <tr>
                              <th>Schlagworte</th>
                              <td>{{$context.keywords}}</td>
                            </tr>
                              
                            
                        </table>
                      </center>
                  </div>
                </b-col>
              </b-row>
            </div>
          </div>
        </slide>
        <slide>
          <div class="new-card">
            <!--<div class="new-card-img">
                <g-image src="~/assets/images/localdash-1.png" width="500"/>
            </div>-->
              <div class="mt-4 new-card-body" lg="4" xl="4" sm="12" xm="12">
                <div class="gmb-img">
                <center>
                  <div>
                    <g-image :src="`${$context.image}`" width="100%" />   
                  </div>
                          
                </center>
                </div>
              </div>
          </div>
        </slide>

        <slide>
          <div class="new-card">
            <!--<div class="new-card-img">
                <g-image src="~/assets/images/localdash-1.png" width="500"/>
              </div>-->
              <div class="mt-4 new-card-body" lg="4" xl="4" sm="12" xm="12">
                      <p class="h5 info-title text-center mb-4">Weitere Informationen</p>
                    <center>
                      <div>
                        {{$context.greview_1_rating}} | {{$context.greview_1_zeit}} | greview_1_reviewer | <span>Localguide?</span>{{$context.greview_1_localguide}} <br> {{$context.greview_1_text}} <br> {{$context.greview_1_beantwortet}}
                      </div>
                      <div>
                        {{$context.greview_1_rating}} | {{$context.greview_2_zeit}} | greview_2_reviewer | <span>Localguide?</span>{{$context.greview_2_localguide}} <br> {{$context.greview_2_text}} <br> {{$context.greview_2_beantwortet}}
                      </div>
                      <div>
                        {{$context.greview_3_rating}} | {{$context.greview_3_zeit}} | greview_3_reviewer | <span>Localguide?</span>{{$context.greview_3_localguide}} <br> {{$context.greview_3_text}} <br> {{$context.greview_3_beantwortet}}
                      </div>
                      <div>
                        {{$context.greview_4_rating}} | {{$context.greview_4_zeit}} | greview_4_reviewer | <span>Localguide?</span>{{$context.greview_4_localguide}} <br> {{$context.greview_4_text}} <br> {{$context.greview_4_beantwortet}}
                      </div>
                      <div>
                        {{$context.greview_5_rating}} | {{$context.greview_5_zeit}} | greview_5_reviewer | <span>Localguide?</span>{{$context.greview_5_localguide}} <br> {{$context.greview_5_text}} <br> {{$context.greview_5_beantwortet}}
                      </div>
                      <div>
                        {{$context.greview_6_rating}} | {{$context.greview_6_zeit}} | greview_6_reviewer | <span>Localguide?</span>{{$context.greview_6_localguide}} <br> {{$context.greview_6_text}} <br> {{$context.greview_6_beantwortet}}
                      </div>
                      <div>
                        {{$context.greview_7_rating}} | {{$context.greview_7_zeit}} | greview_7_reviewer | <span>Localguide?</span>{{$context.greview_7_localguide}} <br> {{$context.greview_7_text}} <br> {{$context.greview_7_beantwortet}}
                      </div>
                      <div>
                        {{$context.greview_8_rating}} | {{$context.greview_8_zeit}} | greview_8_reviewer | <span>Localguide?</span>{{$context.greview_8_localguide}} <br> {{$context.greview_8_text}} <br> {{$context.greview_8_beantwortet}}
                      </div>
                      <div>
                        {{$context.greview_9_rating}} | {{$context.greview_9_zeit}} | greview_9_reviewer | <span>Localguide?</span>{{$context.greview_9_localguide}} <br> {{$context.greview_9_text}} <br> {{$context.greview_9_beantwortet}}
                      </div>
                      <div>
                        {{$context.greview_10_rating}} | {{$context.greview_10_zeit}} | greview_10_reviewer | <span>Localguide?</span>{{$context.greview_10_localguide}} <br> {{$context.greview_10_text}} <br> {{$context.greview_10_beantwortet}}
                      </div>
                    </center>
                </div>
            </div>
        </slide>
        

        <slide>
          <div class="new-card">
          <!--<div class="new-card-img">
              <g-image src="~/assets/images/localdash-1.png" width="500"/>
            </div>-->
            <div class="mt-4 new-card-body" lg="4" xl="4" sm="12" xm="12">
              <p class="h5 info-title text-center mb-4">Weitere Informationen</p>
              <p class="info-text card-1-text">Sehr geehrte Damen und Herren,<br>
              wie Sie sicher bereits mitbekommen haben werden Bewertungen auf diversen, teilweise Branchenspezifischen Bewertungsplattformen immer wichtiger. Die Speerspitze der Plattformen bildet hier Google mit dem Service “My Business”. So werden Google Nutzern, die nach einer speziellen Dienstleistung suchen, direkt die besten 3 Unternehmen aus der Region angezeigt. Diese Platzierung in den Top 3 der Google Suche, ist durch die korrekte Nutzung von Google My Business möglich. Ist diese Position erreicht, erhalten Sie täglich die Aufmerksamkeit von Interessenten Ihrer Branche, die gerade aktiv nach einem lokalen Dienstleister suchen. Durch die guten Bewertungen dieser Top 3 werden 79% (Quelle: Google.com) aller Suchanfragen zumindest zu einem Kontakt per Telefon oder auch zu einem direkten Besuch vor Ort. Die Top 1 bekommt natürlich den größten Anteil aller Suchanfragen ab. Der Unterschied zu gewöhnlichem Marketing ist hier, dass man den Interessenten genau dann mit Ihrem Unternehmen konfrontiert, wenn er gerade aktiv nach einem Anbieter sucht.
              Die Qualität dieser Suchanfragen ist unbezahlbar und nur durch die Top 3 Platzierung erreichbar.<br><br>
              Weiter haben wir festgestellt, dass viele unserer Kunden, die zu 90% aus lokalen Dienstleistern wie Ihnen bestehen, oft dieselben Probleme in der Nutzung des Internet für Ihre Kundenkommunikation haben. Durch Unwissenheit wird z.B. häufig die Chance ausgelassen, Ihre Kunden auf Ihren Smartphones verlässlich zu erreichen. Dies kann zB genutzt werden um an schwachen Tagen mit besonderen Angeboten an Ihre Bestandskunden spontan für Umsätze zu sorgen, die ohne dieses kleine technische System nicht erzielt worden wären. 
              </p>
            </div>
          </div>
        </slide>

        
      
      </hooper>
     <!-- <vue-glide-slide>
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
      <!--<template slot="control" class="control">
        <button data-glide-dir="<">prev</button>
        <button data-glide-dir=">">next</button>
      </template>-->

      </b-row>
      
    </b-container>
  </Layout>
</template>

<script>
import { Glide, GlideSlide } from 'vue-glide-js';
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
    name: 'carrousel',
    name: 'App',
    data() {
      return {
        perView: 1,
        startAt: 0,
        autoplay: false,
        hoverpause: true,
        keyboard: true,
        bound: true,
        dragThreshold: 80,
        gap: 30,
        rewind: false,
        rewindDuration: 0,
        animationDuration: 200,
        info: null,
        carouselData: 0,
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

    watch: {
    carouselData () {
      this.$refs.carousel.slideTo(this.carouselData);
    }
  },

    components: {
        [Glide.name]: Glide,
        [GlideSlide.name]: GlideSlide,
        Hooper,
        Slide,
        HooperNavigation
    },
    computed: {

    },
    methods: {
      backward() {
        return Glide.go('<');
      },
      forward() {
        glide.go('>')
      },
      slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    slideNext() {
      this.$refs.carousel.slideNext();
    },
    updateCarousel(payload) {
      this.myCarouselData = payload.currentSlide;
    }
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
      height: 100%;
      padding: 0.3rem 0.3rem;
      margin-top: 5px;
      width: 100%;
    }

    .new-card-img img{ 
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 60%;   
      margin-bottom: 5px;
      margin-top: 5px;
      
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

    .gmb-img img{
     object-fit: fill !important;
     width: 80% !important;   
    }

    .card-1-text{
     padding: 10px;       
    }

    .gmb-img img{
      object-fit: fill !important;
      max-width: 465px !important;
    }

    .control {
      position: absolute !important;
      top: 0 !important;
    }

    .btn-lg {  
      color: #5eb9e5;     
      border-radius: 0px;
      background-color: #2c3e50;  
      width: 100%;    
    }

    #app {
      max-width: 525px;
    }

    .hooper {
      outline: none;
    }

</style>