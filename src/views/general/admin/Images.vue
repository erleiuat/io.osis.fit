<template>
    <v-container>

        <v-row>
            <v-col cols="12">
                <span class="headline">
                    All Images
                </span>
            </v-col>
        </v-row>

        <v-row dense>
            <v-col v-for="(item, key) in images" :key="key" class="d-flex child-flex" cols="12" md="4">
                <v-card flat>
                    <RegularImage :image="item" aspectRatio="1" />
                    <v-card-text class="pa-1 pb-0 caption text-center">
                        {{ item.id }}
                    </v-card-text>
                    <v-card-actions class="pa-1 pt-0">
                        <v-spacer />
                        <SafeDelete @click="delImage(key)" />
                        <v-spacer />
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col class="text-center" cols="12" md="4" v-if="loading">
                <v-skeleton-loader class="mx-auto" max-width="300" type="card" />
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
import Apios from '@/plugins/apios/'
import RegularImage from '@/components/Image/Regular'
import SafeDelete from '@/components/SafeDelete'

export default {

    components: {
        RegularImage, SafeDelete
    },

    data () {
        return {
            detailed: false,
            loading: false,
            page: 1,
            images: []
        }
    },

    methods: {

        delImage (key) {
            this.loading = true
            Apios.delete('admin/images/' + this.images[key].id).then(() => {
                this.images.splice(key, 1)
                this.$notify({ type: 'success', title: this.$t('alert.success.changed') })
            }).catch(err => {
                this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
            }).finally(() => {
                this.loading = false
            })
        },

        loadImages () {
            this.loading = true
            Apios.get('admin/images/' + this.page).then(res => {
                if (res.data.length) this.images.push(...res.data)
                else window.onscroll = null
            }).catch(err => {
                this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
            }).finally(() => {
                this.loading = false
            })
        }

    },

    mounted () {
        var vm = this
        window.onscroll = function (ev) {
            if (vm.loading) return
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
                vm.page++
                vm.loadImages()
            }
        }
        this.loadImages()
    },

    beforeDestroy () {
        window.onscroll = null
    }

}
</script>
