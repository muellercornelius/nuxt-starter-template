<template>
  <div>
    <div class="bg-blue-300 shadow-xl p-6 text-3xl">Das hier ist die Detailseite</div>
    <div class="text-2xl m-4">Titel: {{ notice.title }}</div>
    <div class="text-2xl m-4">Kategorie: {{ notice.category }}</div>
    <div class="ml-4">Kompletter Response: {{ JSON.stringify(notice) }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notice: {},
    }
  },
  async fetch() {
    this.notice = await this.$strapi.findOne('notices', this.$route.params.id)
  },
}
</script>

