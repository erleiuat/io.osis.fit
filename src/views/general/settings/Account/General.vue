<template>
    <v-form v-model="form.valid" ref="form" @submit.prevent="submit()">
        <v-row no-gutters>
            <v-col cols="12" md="6">
                <v-text-field v-model="form.data.mail" :rules="form.rules.mail" :label="$t('form.mail')" @keyup="exists('mail')" :error-messages="form.existing.mail" required filled @keydown="form.changes++" />
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field v-model="form.data.username" :rules="form.rules.username" :label="$t('form.username')" @keyup="exists('username')" :error-messages="form.existing.username" required filled @keydown="form.changes++" />
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field v-model="form.data.firstname" :rules="form.rules.name" :label="$t('form.firstname')" required filled @keydown="form.changes++" />
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field v-model="form.data.lastname" :rules="form.rules.name" :label="$t('form.lastname')" required filled @keydown="form.changes++" />
            </v-col>
            <v-col cols="6" md="6">
                <v-text-field disabled :label="$t('accLevel')" :value="$t('level.'+$store.state.auth.account.level)" />
            </v-col>
            <v-col cols="6" md="6">
                <v-text-field disabled :label="$t('accStatus')" :value="$t('status.'+$store.state.auth.account.status)" />
            </v-col>
            <v-col cols="12">
                <v-btn :loading="form.sending" :disabled="!form.changes" type="submit" block color="primary">
                    {{ $t('button.save') }}
                </v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>

<script>
import Apios from '@/plugins/apios/'

export default {

  data () {
    return {
      form: {
        valid: false,
        sending: false,
        changes: false,
        existing: {
          mail: null,
          username: null
        },
        data: {
          mail: this.$store.state.auth.account.mail || '',
          username: this.$store.state.auth.account.username || '',
          firstname: this.$store.state.auth.account.firstname || '',
          lastname: this.$store.state.auth.account.lastname || '',
          birthdate: this.$store.state.auth.account.birthdate || ''
        },
        rules: {
          name: [
            v => !!v || this.$t('alert.form.required'),
            v => v.length < 150 || this.$t('alert.form.tooLong', { amount: 150 })
          ],
          username: [
            v => !!v || this.$t('alert.form.required'),
            v => !/\s/.test(v) || this.$t('alert.form.whitespace'),
            v => v.length < 250 || this.$t('alert.form.tooLong', { amount: 250 })
          ],
          mail: [
            v => !!v || this.$t('alert.form.required'),
            v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || this.$t('alert.form.invalid'),
            v => v.length < 90 || this.$t('alert.form.tooLong', { amount: 90 })
          ]
        }
      }
    }
  },

  methods: {

    submit () {
      if (!this.$refs.form.validate()) return false
      this.form.sending = true

      let data = { ...this.form.data, ...{ avatar: this.$store.state.auth.account.avatar } }
      let url = 'account/' + this.$store.state.auth.account.id
      Apios.put(url, data).then(() => {
        this.form.changes = false
        this.$store.dispatch('auth/refresh', true)
        this.$notify({ type: 'success', title: this.$t('alert.success.changed') })
      }).catch(err => {
        this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
      }).finally(() => {
        this.form.sending = false
      })
    },

    exists (enty) {
      clearTimeout(this.checkTimeout)
      this.checkTimeout = setTimeout(() => {
        let url = 'account/check?identifier=' + this.form.data[enty]
        Apios.get(url).then(res => {
          if (res.data.found === true) this.form.existing[enty] = this.$t('alert.form.existing.' + enty)
          else this.form.existing[enty] = null
        }).catch(err => {
          this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
        })
      }, 1000)
    }

  },

  i18n: {
    messages: {
      en: {
        accLevel: 'Account Level',
        accStatus: 'Account Status',
        level: {
          user: 'User',
          moderator: 'Moderator',
          admin: 'Admin'
        },
        status: {
          unverified: 'Nicht verifiziert',
          verified: 'Verifiziert',
          locked: 'Gesperrt',
          deleted: 'Gelöscht'
        }
      },
      de: {
        accLevel: 'Konto-Level',
        accStatus: 'Konto-Status',
        level: {
          user: 'Benutzer',
          moderator: 'Moderator',
          admin: 'Admin'
        },
        status: {
          unverified: 'Nicht verifiziert',
          verified: 'Verifiziert',
          locked: 'Gesperrt',
          deleted: 'Gelöscht'
        }
      }
    }
  }

}
</script>
