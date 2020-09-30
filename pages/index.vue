<template>
  <div>
    <div>Index Page</div>
    <button class="my-6 py-2 px-4 bg-blue-400 rounded-lg shadow-md hover:shadow-xl transition duration-500" @click="logout">
      Ausloggen
    </button>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  methods: {
    logout() {
      this.$strapi.logout()
      this.$router.push('/login')
    },
  },
}
</script>

