<template>
    <v-container fill-height>
        <v-row v-if="loading" align="center" justify="center">
            <v-col cols="12" sm="2" md="4" v-for="i in 3" :key="i">
                <v-skeleton-loader loading transition="fade-transition" type="card" />
            </v-col>
        </v-row>
        <v-row dense v-else-if="Object.keys(items).length" align="center" justify="center">
            <v-col cols="6" sm="4" md="2" v-for="(item, key) in items" :key="key" align-self="stretch">
                <Card :item="item" editable deletable @edit="edit" @delete="deleteItem" />
            </v-col>
        </v-row>
        <v-row dense v-else align="center" justify="center">
            <v-col cols="12" class="text-center">
                {{ $t('alert.noData') }}
            </v-col>
            <v-col cols="auto">
                <v-btn @click="$router.push({name: 'template.add'})" fab color="primary">
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Card from '@/components/Template/Card'

export default {

    components: {
        Card
    },

    data () {
        return {
            loading: true
        }
    },

    computed: {
        items () {
            return this.$store.getters['template/items']
        }
    },

    methods: {
        edit (item) {
            this.$router.push({ name: 'template.edit', params: { id: item.id } })
        },

        loadItems () {
            this.loading = true
            this.$store.dispatch('template/read', this.filter).catch(err => {
                this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
            }).finally(() => {
                this.loading = false
            })
        },

        deleteItem (item) {
            this.$store.dispatch('template/remove', item).then(() => {
                this.$notify({ type: 'success', title: this.$t('alert.success.changed') })
            }).catch(err => {
                this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
            })
        }

    },

    mounted () {
        this.loadItems()
    }

}
</script>
