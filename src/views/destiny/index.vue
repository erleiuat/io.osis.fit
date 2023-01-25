<template>
  <router-view />
</template>

<script>
export default {

  mounted () {
    this.$store.dispatch('destiny/load')
    this.$store.dispatch('logBody/load')
  }

}
</script>
