<template>
  <div id="hello">
    <section class="hero is-medium is-link">
      <div class="hero-body">
        <div class="container">
            <h1 class="title">{{ heading}}</h1>
            <div class="is-two-thirds column is-paddingless"></div>
            <h2 class="subtitle is-4"> {{subheading}} </h2>
        </div>
        <a class="button is-large is-primary" id="learn">Learn more</a>
    </div>
  </section>
    <section class="section">
        <div class="container">
          <div class="columns pd is-desktop">
            <div class="column is-1 has-text-centered">
                <i class="fas fa-cog is-primary"></i>
            </div>
            <div class="column is-one-third-desktop">
               <p class="title"><strong>We provide superior logistics so that your business can flourish in a world that is loved by Jesus</strong></p>
            </div>
            <div class="column">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae accumsan odio, vel maximus lorem. Proin auctor, mi vel ultrices ultrices, nulla risus maximus leo, vitae pellentesque elit nisi quis mauris.</p>
            </div>
        </div> 


        <div class="columns pd">
          <div class="column">
              <div class="card">
                    <div class="card-content">
                      <p class="title">
                        It think it's an absolutely excellent tool for our business. I can't survive without this
                      </p>
                      <p class="subtitle">
                        - Gary Simon
                      </p>
                    </div>
              </div>
          </div>

          <div class="column">
              <div class="card">
                    <div class="card-content">
                      <p class="title">
                        It think it's an absolutely excellent tool for our business. I can't survive without this
                      </p>
                      <p class="subtitle">
                        - Gary Simon
                      </p>
                    </div>
              </div>
          </div>
          
          <div class="column">
              <div class="card">
                    <div class="card-content">
                      <p class="title">
                        It think it's an absolutely excellent tool for our business. I can't survive without this
                      </p>
                      <p class="subtitle">
                        - Gary Simon
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
export default {
  name: 'home',
  data () {
    return {
      heading: "Soaring to new heights", 
      subheading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae accumsan odio, vel maximus lorem. Proin auctor, mi vel ultrices ultrices, nulla risus maximus leo, vitae pellentesque elit nisi quis mauris."
    }
  }
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'

.hero 
  background: url('../assets/test.png')
  background-size: cover

  .title
    +mobile 
      font-weight: bold
    +tablet 
      font-size: 2.5rem
    +desktop 
      font-size: 4rem
      margin-top: 2rem

h2
  margin: 1.5rem 0 2rem 0 !important


.fa-cog
  font-size: 40px

#learn
  .desktop 
    margin-bottom: 2rem

.pd 
  .tablet 
    padding: 2em 0  
    
</style>

