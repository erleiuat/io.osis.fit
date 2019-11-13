<template>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <template v-slot:activator="{ on }">
            <v-btn color="primary" depressed v-on="on" block>
                {{ $t('useTemplate') }}
            </v-btn>
        </template>
        <v-card>
            <v-toolbar flat>
                <v-toolbar-title>{{ $t('useTemplate') }}</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon dark @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-toolbar>
            <v-container>
                <v-row v-if="loading" align="center" justify="center">
                    <v-col cols="12" sm="2" md="4" v-for="i in 3" :key="i">
                        <v-skeleton-loader loading transition="fade-transition" type="card" />
                    </v-col>
                </v-row>
                <v-row dense v-else align="center" justify="center">
                    <v-col cols="12" sm="2" md="4" v-for="(item, key) in items" :key="key">
                        <TemplateCard :item="item" selectable @select="doSelect(item)" />
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
import TemplateCard from '@/components/TemplateCard'

export default {

    components: {
        TemplateCard
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