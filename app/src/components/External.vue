<template>

<div>
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
         <<router-link to="/coming">
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
<div style="margin-left:10%">
        <div class="columns is-Auto">
            <div class="column-1">
             <h3>Result : <span style="color: rgb(62, 161, 62)">{{profile.result}}</span></h3>
            </div>
            </div>
<div class="columns is-mobile" >
    <div class="column">
        <h4><b>{{profile.spi}}</b></h4> <p>SPI </p>
      </div>
      <div class="column">
          <h4><b>{{profile.cpi}}</b></h4> <p>CPI </p>
      </div>


</div>
<div class="columns is-mobile">
    <div class="column">
        <h4><b>{{profile.back}}</b></h4> <p>CURRENT BACKLOG </p>
      </div>
      <div class="column">
          <h4><b>{{profile.total_backlog}}</b></h4> <p>TOTAL BACKLOG </p>
      </div>

</div>
<table class="table">

    <tbody>
      <tr>
        <th>{{profile.sub1}}</th>
        <td>{{profile.mark1}}</td>
       </tr>
      <tr>
          <tr>
                <th>{{profile.sub2}}</th>
        <td>{{profile.mark2}}</td>
             </tr>
            <tr>
                <tr>
      <th>{{profile.sub3}}</th>
        <td>{{profile.mark3}}</td>
                   </tr>
                   <tr>
                   <th>{{profile.sub4}}</th>
        <td>{{profile.mark4}}</td>
                   </tr>
                   <tr>
                   <th>{{profile.sub4}}</th>
        <td>{{profile.mark4}}</td>
                   </tr>
                    <tr>
                   <th>{{profile.sub5}}</th>
        <td>{{profile.mark5}}</td>
                   </tr>
                   
      </tbody>
      </table>


    </div>
   </section>
</div>

</template>

<script>
  import axios from 'axios'
// import Profile from '@/components/Profile'
  export default {
  
    data() {
      return {
        profile: [],
        tUrl: "https://itmvu.herokuapp.com/",
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
.is-mobile{
  width: 93%;
  margin-top: 2%;


}
.is-Auto {
        margin-top: 20px;
        text-align: center;
        width: 93%;

    }
    .column-1 {
        margin-top: 2%;
        border-style: solid white;
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        text-align: center;
        width: 100%;
    }

    .column {
        border-style: solid black;
        box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        text-align: center;
        width: 100%;
        border-radius: 10px;

    }

    .table {
        margin-top: 5%;
        width: 92%;
        text-align: center;
        border-style: solid white;
         box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
         border-radius: 10px;

    }
</style>
