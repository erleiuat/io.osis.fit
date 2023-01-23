<template>
    <ImageForm v-model="form.data.avatar" :loading="form.sending" @input="save()" @delete="deleteImage()" :placeholder="require('@/assets/image/avatar.jpg')" />
</template>

<script>
import Apios from '@/plugins/apios/'
import ImageForm from '@/components/Image/Form'

export default {

  components: {
    ImageForm
  },

  data () {
    return {
      form: {
        sending: false,
        data: {
          avatar: this.$store.state.auth.account.avatar
        }
      }
    }
  },

  methods: {

    save () {
      this.form.sending = true

      let url = 'account/' + this.$store.state.auth.account.id
      Apios.patch(url, this.form.data).then(() => {
        this.$store.dispatch('auth/refresh', true)
        this.$notify({ type: 'success', title: this.$t('alert.success.changed') })
      }).catch(err => {
        this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
      }).finally(() => {
        this.form.sending = false
      })
    },

    deleteImage () {
      this.form.sending = true

      let url = 'account/' + this.$store.state.auth.account.id
      Apios.patch(url, { avatar: null }).then(() => {
        let url = 'files/' + this.form.data.avatar.id
        this.form.data.avatar = null
        Apios.delete(url).then(res => {
          this.$store.dispatch('auth/refresh', true)
          this.$notify({ type: 'success', title: this.$t('alert.success.changed') })
        }).catch(err => {
          this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
        }).finally(() => {
          this.form.sending = false
        })
      }).catch(err => {
        this.form.sending = false
        this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
      })
    }

  }

}
</script>
