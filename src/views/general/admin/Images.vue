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
                    <v-card-text class="pa-1 caption text-center">
                        {{ item.id }}
                    </v-card-text>
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

export default {

    components: {
        RegularImage
    },

    data () {
        return {
            detailed: false,
            loading: false,
            page: 1,
            images: [

            ]
        }
    },

    methods: {

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
