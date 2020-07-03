<template>
  <div class="flex items-center justify-center h-screen">
    <div class="w-full" style="max-width: 400px;">
      <div class="mb-3">
        <label class="px-1 text-lg text-blue-600">Benutzername</label>
        <input
          type="username"
          v-model="login.identifier"
          class="block w-full px-3 py-2 bg-white border-2 rounded-lg shadow-md placeholder-blue-600 border-blue-300 text-md focus:placeholder-blue-500 focus:bg-white focus:border-blue-600 focus:outline-none"
        />
      </div>
      <div class="mb-5">
        <label class="px-1 text-lg text-blue-600">Passwort</label>
        <input
          type="password"
          v-model="login.password"
          v-on:keyup.enter="userLogin"
          class="block w-full px-3 py-2 bg-white border-2 rounded-lg shadow-md placeholder-blue-600 border-blue-300 text-md focus:placeholder-blue-500 focus:bg-white focus:border-blue-600 focus:outline-none"
        />
      </div>
      <button
        @click="userLogin"
        class="block w-full px-6 py-3 mt-3 text-xl font-semibold text-white transition duration-300 rounded-lg shadow-xl bg-blue-400 hover:text-white hover:bg-blue-600"
      >
        Anmelden
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: {
        identifier: '',
        password: '',
      },
    }
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith('local', { data: this.login })
        this.$auth.setUser(response.data.user)
        this.$axios.post('/logs', { action: 'login', user: response.data.user._id })
        console.log('eingeloggt')
      } catch (err) {
        this.$toast.error('Ups, der Benutzername oder das Kennwort war leider falsch')
        console.log(err)
      }
    },
  },
}
</script>
