<!-- Define a component and bind them to an HTML element -->
<template>
  <div id="faq">
    <div class="container">
      <div class="section">
        <h1 class="title">FAQ </h1>
        <h2 class="subtitle is-4">Lorum ipsum, lorem ipsum, etc </h2>

          <div class="columns" v-if="faqs && faqs.length">
            <div class="column is-one-third" v-for="faq of faqs">
                <div class="card">
                  <div class="card-content">
                    <p class="title"> {{faq.title}}  </p>
                    <p class="answer"> {{faq.body}}  </p>
                </div>
              </div>
            </div>
            <div class="column">
              Second column
            </div>
            <div class="column">
              Third column
            </div>
            <div class="column">
              Fourth column
            </div>
          </div>

      </div>
    </div>



  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'faq',
  data: () => ({
    faqs: [],
    errors: []
  }), 
  created() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
     .then(response => {
       this.faqs = response.data.slice(10)
     })
     .catch(e => {
       this.errors.push(e)
     })
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import '../mq'

.pd 
  padding: 2.5em 0 1.5em 0

.answer
  margin-top: 10px !important
  color: gray

.columns
  flex-wrap: wrap

</style>

