<template>
  <form>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--8-col">
        <div class="card-image__picture">
          <img :src="this.dogUrl" class="small"/>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="username" v-model="title" type="text" class="mdl-textfield__input"/>
          <label for="username" class="mdl-textfield__label">Describe me</label>
        </div>
        <div class="actions">
          <a @click.prevent="postDog" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            POST A DOG
          </a>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
export default {
  data () {
    return {
      'dogUrl': null,
      'title': ''
    }
  },
  mounted () {
    this.$http.get('https://dog.ceo/api/breeds/image/random').then(response => {
      console.log(response.body)
      this.dogUrl = response.body.message
    })
  },
  methods: {
    postDog () {
      this.$root.$firebaseRefs.dog.push(
        {
          'url': this.dogUrl,
          'comment': this.title,
          'info': 'Posted by Narnik Today',
          'created_at': -1 * new Date().getTime()
        })
        .then(this.$router.push('/'))
    }
  }
}
</script>
<style scoped>
  .waiting {
    padding: 10px;
    color: #555;
  }
  .small {
    width: 90%;
    margin: 0 5% 0 5%;
  }
</style>