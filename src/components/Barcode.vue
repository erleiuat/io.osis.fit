<template>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="fade-transition">
        <template v-slot:activator="{ on }">
            <v-btn color="primary" depressed v-on="on" block>
                <v-icon>mdi-barcode-scan</v-icon>
            </v-btn>
        </template>
        <v-card class="quagga-container">
            <v-container fluid fill-height class="pt-0 pb-0">
                <v-row>
                    <v-col cols="12" class="pa-0 quagga-toolbar">
                        <v-toolbar flat class="transparent">
                            <v-spacer />
                            <v-btn icon @click="dialog = false">
                                <v-icon large>mdi-close</v-icon>
                            </v-btn>
                        </v-toolbar>
                    </v-col>
                    <v-col v-if="dialog && !loading" cols="12" class="pa-0 quagga-scanner">
                        <v-quagga :onDetected="scanned" :aspectRatio="aspect" :readerSize="size" :readerTypes="types" />
                    </v-col>
                    <v-col v-else-if="dialog && loading" cols="12" class="pa-0 quagga-scanner text-center">
                        <v-progress-linear indeterminate height="100%" color="primary" />
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
import Vue from 'vue'
import Axios from 'axios'
import VueQuagga from 'vue-quaggajs'
Vue.use(VueQuagga)

export default {

    data () {
        return {
            loading: false,
            dialog: false,
            size: {
                width: 500,
                height: 500
            },
            aspect: {
                min: 1,
                max: 1
            },
            types: ['ean_reader']
        }
    },

    methods: {

        scanned (data) {
            if (this.loading) return
            this.loading = true
            let url = 'https://world.openfoodfacts.org/api/v0/product/' + data.codeResult.code + '.json'
            Axios.get(url).then(res => {
                if (res.data.status !== 1) this.$notify({ type: 'warning', title: this.$t('codeNotFound') })
                else this.processItem(res.data.product)
            }).catch(err => {
                this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
            }).finally(() => {
                this.dialog = false
                this.loading = false
            })
        },

        processItem (item) {
            let product = {
                title: item.product_name,
                portionSize: item.product_quantity,
                caloriesPer100: item.nutriments['energy-kcal_100g'],
                fatPer100: item.nutriments['fat_100g'],
                proteinPer100: item.nutriments['proteins_100g']
            }

            let lang = this.$store.state.app.locale
            if (lang === 'de' && item.product_name_de) {
                product.title = item.product_name_de
            } else if (lang === 'fr' && item.product_name_fr) {
                product.title = item.product_name_fr
            } else if (lang === 'it' && item.product_name_it) {
                product.title = item.product_name_it
            } else if (lang === 'en' && item.product_name_en) {
                product.title = item.product_name_en
            }

            if (!product.caloriesPer100 && item.nutriments['energy-kj_100g']) {
                product.caloriesPer100 = Math.round(item.nutriments['energy-kj_100g'] / 4.184)
            }

            this.$emit('select', product)
        }

    },

    i18n: {
        messages: {
            en: {
                scanCode: 'Barcode',
                codeNotFound: 'Product not found'
            },
            de: {
                scanCode: 'Barcode',
                codeNotFound: 'Produkt nicht gefunden'
            }
        }
    }

}
</script>

<style>
.quagga-toolbar {
    position: absolute;
    z-index: 200;
}
.quagga-container {
    height: 100%;
    overflow: hidden;
}
.quagga-scanner {
    z-index: 100;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
}
.quagga-scanner video, .quagga-scanner canvas {
    height: 100vh !important;
    width: 100vw !important;
}
</style>
