<template>
    <v-container>
        <v-row dense justify="center">
            <v-col cols="auto">
                <v-card link v-if="form.data.avatar">
                    <RegularImage :image="form.data.avatar" aspectRatio="1" width="200" />
                </v-card>
                <v-card v-else>
                    <v-img aspect-ratio="1" width="200" :src="require('@/assets/image/avatar.png')" />
                </v-card>
            </v-col>
        </v-row>
        <v-row dense justify="center">
            <v-col style="max-width:210px">
                <ImageUpload @input="save()" @delete="deleteImage()" v-model="form.data.avatar" :loading="form.sending" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Apios from '@/plugins/apios/'
import ImageUpload from '@/components/ImageUpload'
import RegularImage from '@/components/RegularImage'

export default {

    components: {
        ImageUpload, RegularImage
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
