(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{QH5y:function(e,t,i){"use strict";i.r(t);i("sMBO");var n,s,a=i("rePB"),r=i("wT/f"),c=i("fgSW"),l=(i("lV9F"),s={name:"carrousel"},Object(a.a)(s,"name","App"),Object(a.a)(s,"data",(function(){return{perView:1,startAt:0,autoplay:!1,hoverpause:!0,keyboard:!0,bound:!0,dragThreshold:80,gap:30,rewind:!1,rewindDuration:0,animationDuration:200,info:null,carouselData:0,breakpoints:{800:{perView:1}},swiperOptions:{pagination:{el:".swiper-pagination"}}}})),Object(a.a)(s,"watch",{carouselData:function(){this.$refs.carousel.slideTo(this.carouselData)}}),Object(a.a)(s,"components",(n={},Object(a.a)(n,r.Glide.name,r.Glide),Object(a.a)(n,r.GlideSlide.name,r.GlideSlide),Object(a.a)(n,"Hooper",c.a),Object(a.a)(n,"Slide",c.c),Object(a.a)(n,"HooperNavigation",c.b),n)),Object(a.a)(s,"computed",{}),Object(a.a)(s,"methods",{backward:function(){return r.Glide.go("<")},forward:function(){glide.go(">")},slidePrev:function(){this.$refs.carousel.slidePrev()},slideNext:function(){this.$refs.carousel.slideNext()},updateCarousel:function(e){this.myCarouselData=e.currentSlide}}),s),o=(i("WRQH"),i("KHd+")),d=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Layout",[n("b-container",[n("b-row",{attrs:{"align-v":"center"}},[n("b-container",{staticClass:"new-card-img"},[n("b-row",[n("b-col",[n("g-image",{attrs:{src:i("Qt4O")}})],1)],1)],1),n("b-container",{staticClass:"text-center mt-3"},[n("b-row",[n("b-col",[n("b-button",{attrs:{variant:"secondary",size:"lg"},on:{click:function(t){return t.preventDefault(),e.slidePrev(t)}}},[e._v("Back")])],1),n("b-col",[n("b-button",{attrs:{variant:"secondary",size:"lg"},on:{click:function(t){return t.preventDefault(),e.slideNext(t)}}},[e._v("Forward")])],1)],1)],1),n("hooper",{ref:"carousel",staticClass:"mb-5",staticStyle:{height:"100vh"},on:{slide:e.updateCarousel}},[n("slide",[n("div",{staticClass:"new-card"},[n("div",{staticClass:"mt-4 new-card-body",attrs:{lg:"4",xl:"4",sm:"12",xm:"12"}},[n("b-row",[n("b-col",[n("div",{staticClass:"info mb-4"},[n("p",{staticClass:"h5 info-title text-left mb-4"},[e._v("Allgemeine Informationen")]),n("center",[n("table",{staticClass:"fixed",staticStyle:{width:"90%"}},[n("col",{attrs:{width:"30%"}}),n("tr",[n("th",[e._v("Name")]),n("td",[e._v(e._s(e.$context.name))])]),n("tr",[n("th",[e._v("Branche")]),n("td",[e._v(e._s(e.$context.branch))])])])])],1),n("div",{staticClass:"info mb-4"},[n("p",{staticClass:"h5 info-title text-left mb-4"},[e._v("Ihre Kontaktangaben")]),n("center",[n("table",{staticClass:"fixed",staticStyle:{width:"90%"}},[n("col",{attrs:{width:"30%"}}),n("tr",[n("th",[e._v("Telefon")]),n("td",[e._v(e._s(e.$context.phone))])]),n("tr",[n("th",[e._v("E-Mail")]),n("td",[e._v(e._s(e.$context.email))])]),n("tr",[n("th",[e._v("Webseite")]),n("td",[e._v(e._s(e.$context.website))])]),n("tr",[n("th",[e._v("Adresse")]),n("td",[e._v(e._s(e.$context.address)),n("br"),e._v(e._s(e.$context.postal)+" "+e._s(e.$context.town))])])]),n("div",[n("iframe",{staticStyle:{border:"0"},attrs:{width:"100%",height:"180",frameborder:"0","aria-hidden":"false",tabindex:"0",allowfullscreen:"",src:"https://www.google.com/maps/embed/v1/search?key=AIzaSyCS2L4dKZ2g10zGbFKTxnV4jlOSWqUwAaE&q="+e.$context.address+" + "+e.$context.town+"&zoom=18"}})])])],1),n("div",{staticClass:"info mb-4"},[n("p",{staticClass:"h5 info-title text-left mb-4"},[e._v("Weitere Informationen")]),n("center",[n("table",{staticClass:"fixed",staticStyle:{width:"90%"}},[n("col",{attrs:{width:"30%"}}),n("tr",[n("th",[e._v("Angebotene Marken")]),n("td",[e._v(e._s(e.$context.brands))])]),n("br"),n("tr",[n("th",[e._v("Schlagworte")]),n("td",[e._v(e._s(e.$context.keywords))])])])])],1)])],1)],1)])]),n("slide",[n("div",{staticClass:"new-card"},[n("div",{staticClass:"mt-4 new-card-body",attrs:{lg:"4",xl:"4",sm:"12",xm:"12"}},[n("div",{staticClass:"gmb-img"},[n("center",[n("div",[n("g-image",{attrs:{src:""+e.$context.image,width:"100%"}})],1)])],1)])])]),n("slide",[n("div",{staticClass:"new-card"},[n("div",{staticClass:"mt-4 new-card-body",attrs:{lg:"4",xl:"4",sm:"12",xm:"12"}},[n("p",{staticClass:"h5 info-title text-center mb-4"},[e._v("Weitere Informationen")]),n("center",[n("div",[e._v("\n                        "+e._s(e.$context.greview_1_rating)+" | "+e._s(e.$context.greview_1_zeit)+" | greview_1_reviewer | "),n("span",[e._v("Localguide?")]),e._v(e._s(e.$context.greview_1_localguide)+" "),n("br"),e._v(" "+e._s(e.$context.greview_1_text)+" "),n("br"),e._v(" "+e._s(e.$context.greview_1_beantwortet)+"\n                      ")])])],1)])]),n("slide",[n("div",{staticClass:"new-card"},[n("div",{staticClass:"mt-4 new-card-body",attrs:{lg:"4",xl:"4",sm:"12",xm:"12"}},[n("div",{staticClass:"gmb-img"},[n("center",[n("g-image",{attrs:{src:i("Qt4O")}})],1)],1)])])]),n("slide",[n("div",{staticClass:"new-card"},[n("div",{staticClass:"mt-4 new-card-body",attrs:{lg:"4",xl:"4",sm:"12",xm:"12"}},[n("p",{staticClass:"h5 info-title text-center mb-4"},[e._v("Weitere Informationen")]),n("p",{staticClass:"info-text card-1-text"},[e._v("Sehr geehrte Damen und Herren,"),n("br"),e._v("\n            wie Sie sicher bereits mitbekommen haben werden Bewertungen auf diversen, teilweise Branchenspezifischen Bewertungsplattformen immer wichtiger. Die Speerspitze der Plattformen bildet hier Google mit dem Service “My Business”. So werden Google Nutzern, die nach einer speziellen Dienstleistung suchen, direkt die besten 3 Unternehmen aus der Region angezeigt. Diese Platzierung in den Top 3 der Google Suche, ist durch die korrekte Nutzung von Google My Business möglich. Ist diese Position erreicht, erhalten Sie täglich die Aufmerksamkeit von Interessenten Ihrer Branche, die gerade aktiv nach einem lokalen Dienstleister suchen. Durch die guten Bewertungen dieser Top 3 werden 79% (Quelle: Google.com) aller Suchanfragen zumindest zu einem Kontakt per Telefon oder auch zu einem direkten Besuch vor Ort. Die Top 1 bekommt natürlich den größten Anteil aller Suchanfragen ab. Der Unterschied zu gewöhnlichem Marketing ist hier, dass man den Interessenten genau dann mit Ihrem Unternehmen konfrontiert, wenn er gerade aktiv nach einem Anbieter sucht.\n            Die Qualität dieser Suchanfragen ist unbezahlbar und nur durch die Top 3 Platzierung erreichbar."),n("br"),n("br"),e._v("\n            Weiter haben wir festgestellt, dass viele unserer Kunden, die zu 90% aus lokalen Dienstleistern wie Ihnen bestehen, oft dieselben Probleme in der Nutzung des Internet für Ihre Kundenkommunikation haben. Durch Unwissenheit wird z.B. häufig die Chance ausgelassen, Ihre Kunden auf Ihren Smartphones verlässlich zu erreichen. Dies kann zB genutzt werden um an schwachen Tagen mit besonderen Angeboten an Ihre Bestandskunden spontan für Umsätze zu sorgen, die ohne dieses kleine technische System nicht erzielt worden wären. \n            ")])])])]),n("slide",{staticStyle:{color:"white"}},[e._v("\n        slide 3\n      ")])],1),n("vue-glide",{attrs:{type:e.type,startAt:e.startAt,perView:e.perView,autoplay:e.autoplay,hoverpause:e.hoverpause,breakpoints:e.breakpoints,gap:e.gap,rewind:e.rewind}},[n("vue-glide-slide"),n("vue-glide-slide"),n("vue-glide-slide"),n("vue-glide-slide"),n("vue-glide-slide")],1)],1)],1)],1)}),[],!1,null,"132b39d7",null);t.default=d.exports},Qt4O:function(e,t){e.exports={type:"image",mimeType:"image/png",src:"/localdash-site/assets/static/localdash.179003c.42530e7a1963b5b59be9d8cb5071a8a7.png",size:{width:619,height:300},sizes:"(max-width: 619px) 100vw, 619px",srcset:["/localdash-site/assets/static/localdash.179003c.42530e7a1963b5b59be9d8cb5071a8a7.png 619w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 619 300' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-a7ebb9c0e029f77ccf65f21db8274440'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-a7ebb9c0e029f77ccf65f21db8274440)' width='619' height='300' xlink:href='data:image/png%3bbase64%2ciVBORw0KGgoAAAANSUhEUgAAAEAAAAAfCAYAAABXscv8AAAACXBIWXMAAAsSAAALEgHS3X78AAAGuUlEQVRYw%2b1Y6U5bRxTmHSoFgvH1vi/X2/WGbbAxBmyD2YyxscHsS8xSEhJI0rQJbdpENEsV9UdbNSpVKlVq%2bifqjzxA%2bxSV%2bgZV3%2bDrmbFxANFKDaCi1j9Gc2fmzNyZ73znm3Nvk0LvxP%2b5NDUAaABw8Tcp6ByH2q4T%2bi4AAIc3JBwqCuqvP59iXVbL1TbIVRYIWnu977RAnA0AtUMeeT62uZM2%2blebP3Ee1Vp3DMb2FFS2IIEgngkTms7C83UvkWfqhfUxr9FGZeQ5pcEFZW0Oez5ct6qs9fVaVbZ6PysqoxutCjPUrk4UHuxj%2bYtXiK3cRRuteXFCwOCGoNBDUXwM1bPfIRQ/w%2bWFV2gpfAWjGIDU3o1mwYzLyupBm%2blADBTWZgD5I728bqPiC/eghY/bed8lwQRPMA6lSYK9dwKB8QrM4X7INfYLBoDSCEXmJhS3foE8t4fLt3/DOwuvEehMYmS8DIsrjFAsxb3dmcjALnXAG0pQfwgT5SUO1MBoEVNzV2BxhuD0x3jt8EX5eGa0RPFPIMr1pAXWi6MBVYEjyqqMkCVvomXtZ8hS70FWeo5L/ffJe11YWNlErjSPbGEGK%2bvXMZwrw%2bmL4Qo9L69tYTQ/jdmlDYzS%2bNRcBYNjk7i28z6K08uYXlhFYWqR2w0QCC3EGhYWF%2bYW4AAQAxRKPWS5Z2j%2b8A%2b0TX0N9cNfIdt8DZc/ivHJBWQnZpErznMgRvMzSA6OY21zhw6%2bjv6RCeTJhh20PL9KpYLKu9tIDxX4wRlw7dEUUoN5AsBS14izAKHpNMpf3wTbkMYCeWQasuxTyOMrUC59C0VhjzZbtdHb/JzuzRTTItFfb/MR7YPQmKX6gRjd2bPB7ofO6qvbKMnjapOHPO86M8%2bfCQPq6k%2bCxJggVxiICTouiIKgoVpXt%2bEiR3bsgEwA5dTP2uxuP7CRkT6wdXg/2fMbRGmu3f3i0RvnXw%2bB%2btUnQu2IcBbovAmqPdD6erkwsmdBJ9bmOGpzXNUcgYFBntW6o9yWCZvS6KkJHLOpHlgnJaAPpKCmu//wOy9ICLi4d4wdIzCEBuAqbEEfTMOeWYS1dxI6AkJlC/G2LT0HU3QUOn8StlSZ7DMwxbJw5tZhIVs239w9wfvs/fMwUMIj6N1wjK7RWBqG8DCNjcMcz/Mr8QDYA1a8LTua/nHSc7yPkh6lJQB3cYeAGIYrvwVLogh34TrZOwmEJKx9dLD4BMw9JYgEhmNsE54SjWsdBEwZGk8fgpWHsNI8Z3YNZgLBHC/ycNH5UwTYDKSZXbhyG7Alp6GlpIixgDGI6w/XkLcTxqa3ycmFGj0PxlhSYuocgcoaIM/1U0h0UJ1Ga5uOh4HGGaGxdmjcXWSXJU/myKv93JssBASdmw7aC3NXjsKoGyp7CBpXFw8Tna%2bPgB3itSk6RuGQhEzQc%2ba1CUa0KU1UzDx0BI39/BnAU1izl6NeBYPSVau/GscsHCIDFK9%2bqMQIQmt7sPUVadM9sHTnoXFQOKRnKK67YAynicpeSMXrcA4vQiQmaF0x6AkIQ5DyfYuXh4O3uAVXtkLsyHKgpeINePLr9J4h%2bMo7NHcJ1niWA68jMOUa2/lqAKOeMTICcfAK97gtWeYxLg6uQE2ekya3oCWPe6fvwBQegH/pYySfvEKocp9AkpB8%2bhreqRtw55ZJH8JI3P8BjqFF9Dx4iej2l7D3TcI5toGOq48Ru/0ciXsvIJW2EVy8DYVRQmDhIwqJWZr3EpGNPbgnrqFv70eEVj%2bl96U5G84XAPK6tY9S20SJPDRGcbnO6W6K5YmmCUjlbbjHKvAv7MKRmUNg5QG67%2b0juLQLaeoWuu/uI/7BNwivfcLFLn73OwJjgwC7hfju95DIu%2bLQCnl3G5Gtz8n%2bBenKVXRsPeFaEFp9xLUgdmef1tiDhxjkm9lB8tFPMLX3oY1YeG4A8BCgq8pEYqeleGbqzyjLQkAthik0JE5fz/gq75eIviYKCUZ9rdQNO6k/szVGBjl1HZlZiANUUlPQ%2b7op7qNUJ/hnr5ISH52vBw4atycnyW4GTmKKmJmndolsY3CNEP17CsS8IHeCRmyv/ys4VxHkoqOp/pzg4sOSFP4JLPI%2bJn6sX8ZqlsTwhIfagoHbsvky%2bqiRyQ3VmvrZOF%2bzVjM7Pqc2XrflbSOtaePrtymMVdtjP0rOVQQV9e/1N9fPkV9W7HpitcF9dPxgnqE2dric%2bM4T7AzuN%2bsY3UfXPM9rkGdyh/70HL0WTy7Hf5oc5BF/N%2be05VwZ0Pgr3ACgAUADgAYADQD%2bW%2bVPCJTVrqXFsBsAAAAASUVORK5CYII=' /%3e%3c/svg%3e"}},WRQH:function(e,t,i){"use strict";var n=i("elQ8");i.n(n).a},elQ8:function(e,t,i){}}]);