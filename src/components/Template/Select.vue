<template>
    <v-dialog v-model="dialog" fullscreen scrollable hide-overlay transition="fade-transition">
        <template v-slot:activator="{ on }">
            <v-btn color="primary" depressed v-on="on" block>
                {{ $t('useTemplate') }}
            </v-btn>
        </template>
        <v-card class="selector-window" tile>
            <v-card-title class="pt-2 pb-2 grey darken-3">
                <v-toolbar-title>{{ $t('useTemplate') }}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon dark @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text class="pt-1 pl-2 pr-2">
                <v-row v-if="loading" align="center" justify="center">
                    <v-col cols="12" sm="2" md="4" v-for="i in 3" :key="i">
                        <v-skeleton-loader loading transition="fade-transition" type="card" />
                    </v-col>
                </v-row>
                <v-row dense v-else-if="Object.keys(items).length" align="center" justify="center">
                    <v-col cols="12" sm="2" md="4" v-for="(item, key) in items" :key="key" align-self="stretch">
                        <Card :item="item" selectable @select="doSelect(item)" />
                    </v-col>
                </v-row>
                <v-row dense v-else-if="items" align="center" justify="center">
                    <v-col cols="12" class="text-center title black--text">
                        {{ $t('alert.noData') }}
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import Card from '@/components/Template/Card'

export default {

    components: {
        Card
    },

    data () {
        return {
            dialog: false,
            loading: true

        }
    },

    computed: {
        items () {
            return this.$store.getters['template/items']
        }
    },

    methods: {

        doSelect (item) {
            this.dialog = false
            this.$emit('select', item)
        },

        loadItems () {
            this.loading = true
            this.$store.dispatch('template/read', this.filter).catch(err => {
                this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
            }).finally(() => {
                this.loading = false
            })
        }

    },

    mounted () {
        this.loadItems()
    },

    i18n: {
        messages: {
            en: {
                useTemplate: 'Use Template'
            },
            de: {
                useTemplate: 'Vorlage nutzen'
            }
        }
    }

}
</script>

<style scoped>
.selector-window {
    background-color: rgba(130, 130, 130, 0.8);
}
</style>
