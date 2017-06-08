<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <pre style="text-align: left; font-size: 150%;">
      Two ways:
      
      Link to Vue directly on your page:
      &lt;script src="https://unpkg.com/vue"&gt;&lt;/script&gt;

      Install to a directory using NPM:
      $ npm install vue
      
      Use vue-cli to create projects, install packages to aid in development:
      $ npm install --global vue-cli
      
      Create a new project using the "webpack" template:
      $ vue init webpack my-project
      
      Switch to new project's directory, install dependencies and run
      $ cd my-project
      $ npm install
      $ npm run dev
    </pre>
  </div>
</template>

<script>
export default {
  name: 'getting-started',
  data () {
    return {
      title: 'Getting Started'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
