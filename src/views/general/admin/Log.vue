<template>
    <v-container>

        <v-form @submit.prevent="loadLog()">
            <v-row dense justify="center" align="center">
                <v-col cols="6" md="2">
                    <v-text-field label="From #" v-model="filter.from" hide-details />
                </v-col>
                <v-col cols="6" md="2">
                    <v-text-field label="To #" v-model="filter.to" hide-details />
                </v-col>
                <v-col cols="6" md="3">
                    <v-text-field label="Identity" v-model="filter.identity" hide-details />
                </v-col>
                <v-col cols="6" md="3">
                    <v-text-field label="Level" v-model="filter.level" hide-details />
                </v-col>
                <v-col cols="12" md="2">
                    <v-btn block depressed color="primary" type="submit">
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>
                </v-col>
                <v-col cols="12">
                    <v-divider />
                </v-col>
            </v-row>
        </v-form>

        <v-row v-if="detailed !== false">
            <v-col cols="12" class="text-left">
                <table>
                    <tr>
                        <th>ID #</th>
                        <td>{{ log[detailed].id }}</td>
                    </tr>
                    <tr>
                        <th>Level</th>
                        <td>{{ log[detailed].level }}</td>
                    </tr>
                    <tr>
                        <th>Identity</th>
                        <td>{{ log[detailed].identifier }}</td>
                    </tr>
                    <tr>
                        <th>Process</th>
                        <td>{{ log[detailed].process }}</td>
                    </tr>
                    <tr>
                        <th>Info</th>
                        <td>{{ log[detailed].information }}</td>
                    </tr>
                    <tr>
                        <th>Stamp</th>
                        <td>{{ log[detailed].stamp }}</td>
                    </tr>
                    <tr>
                        <th>Trace</th>
                        <td>{{ log[detailed].trace }}</td>
                    </tr>
                </table>
            </v-col>
            <v-col cols="12">
                <v-divider />
            </v-col>
        </v-row>

        <v-row justify="center" align="center">
            <v-col class="text-center" cols="12" v-if="loading">
                <v-skeleton-loader class="mx-auto" type="table" />
            </v-col>
            <v-col cols="12" v-else-if="log.length">
                <v-simple-table dense>
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-left">#</th>
                                <th class="text-left">Level</th>
                                <th class="text-left">Identity</th>
                                <th class="text-left">Process</th>
                                <th class="text-left">Stamp</th>
                            </tr>
                        </thead>
                        <tbody style="cursor: pointer">
                            <tr v-for="(item, key) in log" :key="key" @click="detailed = key" :class="key === detailed ? 'primary': ''">
                                <td>{{ item.id }}</td>
                                <td>{{ item.level }}</td>
                                <td>{{ item.identifier ? item.identifier.substring(0, 30) : 'n/a ' }}...</td>
                                <td>{{ item.process }}</td>
                                <td>{{ item.stamp }}</td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-col>
            <v-col cols="12" v-else>
                No Results
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
import Apios from '@/plugins/apios/'

export default {

  data () {
    return {
      detailed: false,
      loading: false,
      filter: {
        identity: null,
        level: null,
        from: 0,
        to: 100
      },
      log: [

      ]
    }
  },

  methods: {

    loadLog () {
      this.loading = true
      let url = 'admin/log?from=' + this.filter.from + '&to=' + this.filter.to

      if (this.filter.level) url += '&level=' + this.filter.level
      if (this.filter.identity) url += '&identity=' + this.filter.identity

      Apios.get(url).then(res => {
        this.log = res.data
      }).catch(err => {
        this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
      }).finally(() => {
        this.loading = false
      })
    }

  },

  mounted () {
    this.loadLog()
  }

}
</script>
