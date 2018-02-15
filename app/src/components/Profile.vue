<template>
    <div id="Profile">
        <section>
<nav class="navbar is-transparent">
  <div class="navbar-brand">
      <router-link to="/" >
      <img src="./logo/logo1.png" alt="ITMVU"  height="100%">
 </router-link>
    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
  <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-end">
      <a class="navbar-item" href=" ">
        <router-link to="/">
         Home
        </router-link>
      </a>
      
        <a class="navbar-item" >
          <router-link v-bind:to="'/external/' + profile.no">
         External
         </router-link>
        </a>

      
       <a class="navbar-item" href="">
         <router-link to="/coming">
       Comming Soon !
       </router-link>
      </a>
    </div>
  </div>
</nav>

    <div class="card">
        <div class="card-content">
          <h3 style="color:white ">
            {{profile.name}}
          </h3>
          <p style="color: whitesmoke">
            {{ profile.no }}
          </p>
          <P  style="color: whitesmoke">
             {{ profile.branch }}
            
          </P>
          <P  style="color: whitesmoke">
             Semester : {{ profile.sem }}
            
          </P>
           
        </div>
        </div>
                  <div style="margin-left: 10%">
                  <div class="columns is-mobile">
                      <div class="column">
                       <h3>{{ profile.cpi }}</h3>
                       <p>CPI</p>
                      </div>
                      <div class="column">
                          <h3>{{ profile.spi }}</h3>
                          <p>SPI</p>
                         </div>
                      </div>



                      <div class="columns is-Auto">
                          <div class="column-1">
                           <h3 >Total Backlog : {{ profile.total_backlog }}</h3>
                          </div>
                          </div>

                          <div class="columns is-Auto">
                              <div class="column-1">
                               <h3>Pending Backlogs</h3>
                              </div>
                              </div>

              <div class="columns is-mobile">

                <div class="column">
                <b>  {{ profile.back_1 }}</b><p>sem 1</p>
                </div>
                <div class="column">
                 <b> {{ profile.back_2 }}</b><p>sem 2</p>
                </div>
                <div class="column">
                 <b> {{ profile.back_3 }}</b><p>sem 3</p>
                </div>
                <div class="column">
               <b>  {{ profile.back_4 }}</b><p>sem 4</p>
                </div>
              </div>
              <div class="columns is-mobile">

                  <div class="column">
                  <b>  {{ profile.back_5 }}</b><p>sem 5</p>
                  </div>
                  <div class="column">
                  <b> {{ profile.back_6 }}</b><p>sem 6</p>
                  </div>
                  <div class="column">
                   <b> {{ profile.back_7 }}</b><p>sem 7</p>
                  </div>
                  <div class="column">
                    <b>  {{ profile.back_8 }}</b><p>sem 8</p>
                    </div>
                  </div>
                </div>




          </section>



    </div>

    </template>


  

<script>
  import axios from 'axios'
//import signin from '@/components/signin'
  export default {
  
    data() {
      return {
        profile: [],
        tUrl: "https://itmvu.herokuapp.com/",
        rollnum: '',
      }
    },
    mounted() {
      const self=this;
      axios.get(this.tUrl + this.$route.params.id)
        .then(function(res) {
          self.profile = res.data;
        })
        .catch(function(error) {
          console.log('Error:', error);
        })
    },
    methods: {
      
    }
  }

   document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});
</script>

<style>
.card{
  background-color: hsl(330, 50%, 40%);
  margin-top: 2%;
  margin-left:10%;
  border-radius: 10px;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  width:83%;
}
    .is-Auto {
        margin-top: 20px;
        text-align: center;
        width: 92%;
    }

    .is-mobile {
        margin-top: 20px;
        text-align: center;
        width: 93%;
    }

    .column-1 {
        margin-left: 10px;
        border-style: solid white;
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        font-size: 0.7em;
        text-align: center;
        width: 100%;
    }

    .column {
        margin-left: 10px;
        border-style: solid white;
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        font-size: 0.7em;
        text-align: center;
    }
</style>
