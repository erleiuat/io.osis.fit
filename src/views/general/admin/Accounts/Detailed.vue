<template>
    <v-container>

        <v-row>
            <v-col cols="12" md="" class="text-left">
                <table>
                    <tr>
                        <th>ID</th>
                        <td>{{ value.account_id }}</td>
                    </tr>
                    <tr>
                        <th>Mail</th>
                        <td>{{ value.mail }}</td>
                    </tr>
                    <tr>
                        <th>Username</th>
                        <td>{{ value.username }}</td>
                    </tr>
                    <tr>
                        <th>Level</th>
                        <td>{{ value.level }}</td>
                    </tr>
                    <tr>
                        <th>Status</th>
                        <td>{{ value.status }}</td>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <td>{{ value.firstname }} {{ value.lastname }}</td>
                    </tr>
                    <tr>
                        <th>Birthdate</th>
                        <td>{{ value.birthdate }}</td>
                    </tr>
                    <tr>
                        <th>Locale</th>
                        <td>{{ value.locale }}</td>
                    </tr>
                </table>
            </v-col>
            <v-col cols="12" md="" class="text-md-right">
                <v-avatar size="200">
                    <RegularImage :image="value.avatar" :placeholder="require('@/assets/image/avatar.jpg')" aspectRatio="1" />
                </v-avatar>
            </v-col>
        </v-row>

        <v-row dense justify="center" align="center">
            <v-col cols="3" v-if="!cLevel">
                <v-btn @click="cLevel=true" :loading="loading" block small color="primary">
                    Change Level
                </v-btn>
            </v-col>
            <v-col cols="3" v-else>
                <v-select :items="levels" v-model="value.level" filled hide-details label="Select Level" />
                <v-btn @click="saveLevel()" :loading="loading" small block color="secondary" depressed class="mt-2">
                    Save
                </v-btn>
            </v-col>

            <v-col cols="3" v-if="!cStatus">
                <v-btn @click="cStatus=true" :loading="loading" block small color="primary">
                    Change Status
                </v-btn>
            </v-col>
            <v-col cols="3" v-else>
                <v-select :items="stati" v-model="value.status" filled hide-details label="Select Status" />
                <v-btn @click="saveStatus()" :loading="loading" small block color="secondary" depressed class="mt-2">
                    Save
                </v-btn>
            </v-col>

            <v-col cols="3" v-if="!dSessions">
                <v-btn @click="dSessions=true" :loading="loading" block small color="primary">
                    Delete Sessions
                </v-btn>
            </v-col>
            <v-col cols="3" v-else>
                <v-btn @click="delSessions()" :loading="loading" small block color="error" depressed>
                    Are you sure?
                </v-btn>
            </v-col>

            <v-col v-if="!dAccount" cols="3">
                <v-btn @click="dAccount=true" :loading="loading" block small color="primary">
                    Delete Account/Data
                </v-btn>
            </v-col>
            <v-col cols="3" v-else>
                <v-btn @click="delAccount()" :loading="loading" small block color="error" depressed>
                    Are you sure?
                </v-btn>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
import Apios from '@/plugins/apios/'
import RegularImage from '@/components/Image/Regular'

export default {

  components: {
    RegularImage
  },

  props: ['value'],

  data () {
    return {
      cLevel: false,
      cStatus: false,
      dSessions: false,
      dAccount: false,
      loading: false,
      levels: [
        { value: 'user', text: 'User' },
        { value: 'moderator', text: 'Moderator' },
        { value: 'admin', text: 'Admin' }
      ],
      stati: [
        { value: 'unverified', text: 'Unverified' },
        { value: 'verified', text: 'Verified' },
        { value: 'locked', text: 'Locked' },
        { value: 'deleted', text: 'Deleted' }
      ]
    }
  },

  methods: {

    saveLevel () {
      let url = 'admin/account/' + this.value.account_id
      let body = { level: this.value.level }
      this.submit(url, body)
      this.cLevel = false
    },

    saveStatus () {
      let url = 'admin/account/' + this.value.account_id
      let body = { status: this.value.status }
      this.submit(url, body)
      this.cStatus = false
    },

    submit (url, body) {
      this.loading = true
      Apios.post(url, body).then(() => {
        this.$notify({ type: 'success', title: this.$t('alert.success.changed') })
      }).catch(err => {
        this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
      }).finally(() => {
        this.loading = false
      })
    },

    delSessions () {
      this.loading = true
      this.dSessions = false
      Apios.delete('admin/sessions/' + this.value.account_id).then(() => {
        this.$notify({ type: 'success', title: this.$t('alert.success.changed') })
      }).catch(err => {
        this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
      }).finally(() => {
        this.loading = false
      })
    },

    delAccount () {
      // TODO
      this.dAccount = false
    }

  }

}
</script>
