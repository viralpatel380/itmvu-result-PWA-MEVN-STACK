<template>
  <div class="hello">
      <section >

          <div class="hero-body" >

                      <div class="container has-text-centered">
                          <div class="column is-6 is-offset-3">
                            <img src="./logo/logo.png" alt="itmvu" style="width: 50%" >

                          <div class="box" style="margin-top: 50px">

                                 <div class="field is-grouped">
                                    <p class="control is-expanded">
                                        <input v-model="rollnum" class="input" type="text" placeholder="Enter your Roll Number" id="roll_no">
                                    </p>
                                  
                                        <p class="control">
                                            <a class="button" :href="'profile/'+rollnum" style="background-color: #993366;color: white;">
                                             Submit
                                            </a>
    
                                        </p>
                                  
                                </div>
                          </div>

                      </div>
                    </div>
              
          </div>

                  </section>

  </div>
</template>

<script>
    const compiler = require('vue-template-compiler')
    import axios from 'axios'
    export default {
    
        data() {
            return {
                profile: [],
                tUrl: "https://itmvu.herokuapp.com/",
                rollnum: '',
            }
        },
        mounted() {
    
        },
        methods: {
            viral: function() {
            }
      }
    
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
</style>