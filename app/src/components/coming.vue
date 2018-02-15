<template>
<div>
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
          <h2 style="color:white ">
Comin Soon
          </h2>
          <h4><i class="fas fa-camera-retro">Notifications</i></h4>
          <h4>Admin Panel</h4>
          <h4>Student's Achievements</h4>
          <h4>Exam Time Table</h4>
          <h4>Exam Seating Arragements</h4>
          <h4>Contact Us</h4>




        </div>
        </div>
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

  
</script>
<style>
.card{
  background-color: hsl(330, 50%, 40%);
  margin-top:25%;
  margin-left:8%;
  border-radius: 10px;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  width:83%;
}
h4{
  color: white;

}
</style>
