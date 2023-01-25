<template>
  <v-container>

    <v-row justify="center">
      <v-col cols="12" v-if="loading">
        <v-progress-circular :size="50" color="primary" indeterminate />
      </v-col>
      <v-col cols="12" v-else>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" filled hide-details />
        <v-data-table :headers="headers" :items="codes" :search="search" dense />
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import Apios from '@/plugins/apios/'

export default {

  data () {
    return {
      loading: false,
      search: '',
      headers: [
        { text: 'Code', value: 'code' },
        { text: 'HTTP', value: 'http_code' },
        { text: 'Concerns', value: 'concerns' },
        { text: 'Description', value: 'description' },
        { text: 'Notes', value: 'notes' }
      ],
      codes: []
    }
  },

  methods: {

    loadCodes () {
      this.loading = true

      Apios.get('admin/codes').then(res => {
        this.codes = res.data
      }).catch(err => {
        this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
      }).finally(() => {
        this.loading = false
      })
    }

  },

  mounted () {
    this.loadCodes()
  }

}
</script>
