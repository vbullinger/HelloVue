<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <pre>
// message = 'This will never change'
&lt;span v-once&gt;{ { message } }&lt;/span&gt;
    </pre>
    <p>
      <span v-once>{{ message }}</span>
      <input v-model="message" />
    </p>
    <pre>
// rawHtml = '&lt;b&gt;Hello!&lt;/b&gt;'
&lt;p v-html="rawHtml"&gt;&lt;/p&gt;
    </pre>
    <p v-html="rawHtml"></p>
    <pre>
// Attributes are bound with special syntax
&lt;a v-bind:href="url"&gt;&lt;/a&gt;
// Or you can use the short-hand:
&lt;a :href="url"&gt;&lt;/a&gt;
    </pre>
    <pre>
// Conditionals
&lt;p v-if="message === ''"&gt;Oh, noes! Message is blank!&lt;/p&gt;
    </pre>
    <p v-if="message === ''">Oh, noes! Message is blank!</p>
    <pre>
// Loops
todos: [
  { todo: "Go to Vince's talk" },
  { todo: 'Have fun' }
]
&lt;ul&gt;
  &lt;li v-for="todo in todos"&gt;
    { { todo.todo } }
  &lt;/li&gt;
&lt;/ul&gt;
    </pre>
    <ul>
      <li v-for="todo in todos">
        {{ todo.todo }}
      </li>
    </ul>
    <pre>
// Events
&lt;button v-on:click="buttonClick"&gt;&lt;/button&gt;
<button v-on:click="buttonClick">You should click this button!</button>
// Don't forget to show the code for the method...

// Or you can use the short-hand:
&lt;button @click="buttonClick"&gt;&lt;/button&gt;

// Modifiers are built-in ways to perform common tasks with events
&lt;form @submit.prevent="onSubmit"&gt;&lt;/form&gt;
// All modifiers: .stop, .prevent, .capture, .self, .once

// Keyboard events ([key code], tab, delete, enter, esc, space, up, down, left, right)
&lt;input @keyup.enter="onEnter" /&gt;

// v-model modifiers: lazy, number, trim

// You can make your own custom modifiers

// Filters
{ { message | capitalize } }
{{ message | capitalize }}
// Don't forget to show the code for filters...

// Directives
// Global directive:
Vue.directive('demo', {
  bind: function (el, binding) {
    var s = JSON.stringify
    el.innerHTML =
      'name: '       + s(binding.name) + '&lt;br&gt;' +
      'value: '      + s(binding.value) + '&lt;br&gt;' +
      'expression: ' + s(binding.expression) + '&lt;br&gt;'
  }
})

&lt;div v-demo="message"&gt;&lt;/div&gt;

name: "demo"
value: "{{ message }}"
expression: "message"

// Local directive:
Vue.component(...,
  directives: {
    demo: { ... }
  }
)
    </pre>
  </div>
</template>

<script>
export default {
  filters: {
   capitalize: function (value) {
    return value.charAt(0).toUpperCase()+value.slice(1);
   }
  },
  methods: {
    buttonClick: function() {
      alert('Wow, you clicked the button!');
    }
  },
  name: 'templates',
  data () {
    return {
      message: 'This will never change',
      rawHtml: '<b>Hello!</b>',
      title: 'Templates',
      todos: [
        { todo: "Go to Vince's talk" },
        { todo: 'Have fun' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
pre, p, ul, li {
  font-size: 150%;
  margin: 0px;
  text-align: left;
}
</style>
