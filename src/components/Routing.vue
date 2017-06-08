<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <div v-if="!javascriptRouting">
    <div v-if="!showNestedRoutes">
      <div v-if="!showRoutingEvents">
        <p v-if="!$route.params.parameter">
          While you can roll your own router, vue-router is the officially supported router, is recommended for Vue projects and is automatically installed when creating a project with project templates like webpack.
          <br />
          <br />
          Take a look at router/index.js and come back to this page
          <br />
          <br />
          Add something to the end of the URL to demonstrate dynamic route matching with route parameters...
        </p>
        <p v-if="$route.params.parameter">
          {{ $route.params.parameter }} <== wow, how did that get there?!?
          <br />
          <br />
          <input v-model="message" />
          <br />
          <br />
          <router-link to="/Routing/It Does Not Get Wiped Out">What happens to the value above when we change the route?</router-link>
        </p>
        <button @click="showRoutingEvents = true" v-if="$route.params.parameter && $route.params.parameter === 'It Does Not Get Wiped Out'">What if I don't want that?</button>
      </div>
      <pre v-if="showRoutingEvents">
const User = {
    template: '...',
    watch: {
        '$route' (to, from) {
            // react to route changes...
        }
    },
    beforeRouteUpdate (to, from, next) {
        // react to route changes...
        // don't forget to call next()
    }
}
      </pre>
      <button v-if="showRoutingEvents" @click="showNestedRoutes = true">How about nested routes?</button>
    </div>
    <div v-if="showNestedRoutes">
      <pre>
const router = new VueRouter({
  routes: [
    {
      component: User,
      path: '/user/:id',
      children: [
        {
          // UserProfile will be rendered inside User's router-view
          // when /user/:id/profile is matched
          path: 'profile',
          component: UserProfile
        },
        {
          // UserPosts will be rendered inside User's router-view
          // when /user/:id/posts is matched
          path: 'posts',
          component: UserPosts
        }
      ]
    }
  ]
})      </pre>
      <button @click="javascriptRouting = true">How about pure Javascript routing?</button>
    </div>
    </div>
    <div v-if="javascriptRouting">
      <pre>
// Literal string path
router.push('home')

// Object
router.push({ path: 'home' })

// Complete and abort callbacks
router.push({ path: 'home' }, onComplete?, onAbort?)

// Named routes
const router = new VueRouter({
  routes: [
    {
      path: '/user/:userId',
      name: 'user',
      component: User
    }
  ]
})

router.push({ name: 'user', params: { userId: 123 }})

// Query string instead of route parameter, resulting in /register?plan=private
router.push({ path: 'register', query: { plan: 'private' }})

// Replace does not change browser's history
router.replace(location)

// Move n spots forward or back in browser's history
router.go(n)
      </pre>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'routing',
  data () {
  return {
  defaultMessage: 'Type something here',
  javascriptRouting: false,
  message: 'Type something here',
  showNestedRoutes: false,
  showRoutingEvents: false,
  title: 'Routing'
  }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="">
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

  p, pre {
  font-size: 150%;
  text-align: left;
  }
</style>
