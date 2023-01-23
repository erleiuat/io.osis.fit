<template>
    <v-container>

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
                <v-text-field label="Status" v-model="filter.status" hide-details />
            </v-col>
            <v-col cols="12" md="2">
                <v-btn block @click="loadAccounts()">
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
            </v-col>
            <v-col cols="12">
                <v-divider />
            </v-col>
        </v-row>

        <v-row v-if="detailed !== false">
            <Detailed v-model="accounts[detailed]" />
            <v-col cols="12">
                <v-divider />
            </v-col>
        </v-row>

        <v-row justify="center">
            <v-col class="text-center" cols="12" v-if="loading">
                <v-skeleton-loader class="mx-auto" type="list-item-avatar-two-line" />
            </v-col>
            <v-col cols="12" v-else>
                <v-list two-line>
                    <v-list-item v-for="(item, key) in accounts" :key="key" @click="detailed = key" :class="key === detailed ? 'primary': ''">
                        <v-list-item-avatar>
                            <RegularImage :image="item.avatar" :placeholder="require('@/assets/image/avatar.jpg')" aspectRatio="1" />
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.firstname }} {{ item.lastname }}
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                {{ item.status }} {{ item.level }} | {{ item.mail }}
                            </v-list-item-subtitle>
                        </v-list-item-content>

                    </v-list-item>
                </v-list>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
import Apios from '@/plugins/apios/'
import Detailed from '@/views/general/admin/Accounts/Detailed'
import RegularImage from '@/components/Image/Regular'

export default {

  components: {
    Detailed, RegularImage
  },

  data () {
    return {
      detailed: false,
      loading: false,
      filter: {
        identity: null,
        status: null,
        from: 0,
        to: 100
      },
      accounts: [

      ]
    }
  },

  methods: {

    loadAccounts () {
      this.loading = true
      let url = 'admin/accounts?from=' + this.filter.from + '&to=' + this.filter.to

      if (this.filter.status) url += '&status=' + this.filter.status
      if (this.filter.identity) url += '&identity=' + this.filter.identity

      Apios.get(url).then(res => {
        this.accounts = res.data
      }).catch(err => {
        this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
      }).finally(() => {
        this.loading = false
      })
    }

  },

  mounted () {
    this.loadAccounts()
  }

}
</script>
