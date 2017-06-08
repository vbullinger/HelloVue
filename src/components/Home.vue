<!-- Components are the lifeblood of Vue, as well as other frameworks like React and Angular 2 (Angular 1 had directives) -->
<!-- It's how you create segmented, focused and reusable blocks of code -->

<!-- Three main parts to a Vue component: -->

<!-- The template, which is the formatted HTML used to display the component, parsed into a render function -->
<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <p>
      Hello, Open Source North!
    </p>
    <p>
      Thank you for coming to my talk today and learning a little about Vue.js
    </p>
    <p>
      Use the links to the left to navigate.
    </p>
  </div>
</template>
<!-- Or you can make your own render function -->
// render: function (createElement) { return createElement('div', 'Component made through custom render function'); }

<!-- The definition of the Vue component, in JavaScript -->
<script>
  export default {
    name: 'home',
    // Object or function that returns an object
    data () {
      // Do something meaningful here, like fetch data
      return {
        title: 'A First View of Vue.js'
      }
    }
    // Or...
    // data: { title: 'A First View of Vue.js' }
  }

  // If you want to define a Vue component outside of a .vue file, you can say
  // Vue.component('a-name', { data: function(){ return { content: 'stuff' } }, template: '<div>{{content}}</div>' })
  // Now, <component-name></component-name> can be used
</script>

<!-- The styles for the component -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
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

  p {
    font-size: 150%;
    text-align: left;
  }
</style>
