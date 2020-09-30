<template>
  <div>
    <div class="bg-blue-300 shadow-xl p-6 flex justify-between">
      <div class="text-3xl">Beispiel Liste</div>
      <button class="py-2 px-4 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-500" @click="logout">
        Ausloggen
      </button>
    </div>

    <div v-for="notice in notices" :key="notice._id">
      <router-link :to="notice._id">
        {{ notice.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      notices: [],
    }
  },
  async fetch() {
    this.notices = await this.$strapi.find('notices')
  },
  methods: {
    logout() {
      this.$strapi.logout()
      this.$router.push('/login')
    },
  },
}
</script>

