<template>
    <v-container>

        <v-sheet>
            <v-row dense align="center" justify="center">
                <v-col cols="12" class="text-center caption">
                    {{ $t('totalSum') }}
                </v-col>
            </v-row>
            <v-divider />
            <v-row align="center" justify="center">
                <v-col cols="6" class="text-center">
                    <span class="title text-center">
                        {{ $t('tbl.weight') }}
                    </span><br />
                    {{ total.weight }} {{ $t('unit.kilogram.short') }}
                </v-col>
                <v-col cols="6" class="text-center">
                    <span class="title text-center">
                        {{ $t('tbl.fat') }}
                    </span><br />
                    {{ total.fat }} {{ $t('unit.percentage.short') }}
                </v-col>
            </v-row>
        </v-sheet>

        <v-row align="center">
            <v-col>
                <v-card flat>
                    <v-card-text>
                        <v-skeleton-loader :loading="loading" transition="fade-transition" type="table-tbody" tile>
                            <v-simple-table dense v-if="Object.keys(items).length">
                                <template v-slot:default>
                                    <thead>
                                        <tr>
                                            <th>{{ $t('tbl.time') }}</th>
                                            <th>{{ $t('tbl.weight') }}</th>
                                            <th>{{ $t('tbl.fat') }}</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in items" :key="item.id">
                                            <td>{{ $dateFormat(item.date) }} {{ item.time }}</td>
                                            <td>{{ item.weight || 0 }} {{ $t('unit.kilogram.short') }}</td>
                                            <td>{{ item.fat || 0 }} {{ $t('unit.percentage.short') }}</td>
                                            <td>
                                                <v-btn icon @click="deleteItem(item)">
                                                    <v-icon>mdi-delete</v-icon>
                                                </v-btn>
                                            </td>
                                        </tr>
                                    </tbody>
                                </template>
                            </v-simple-table>
                            <v-sheet v-else class="title text-center pt-2 pb-2">
                                {{ $t('alert.noData') }}
                            </v-sheet>
                        </v-skeleton-loader>
                    </v-card-text>
                </v-card>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Vue from 'vue'

export default {

    data () {
        return {
            loading: true,
            items: []
        }
    },

    computed: {

        total () {
            let fWeight = false
            let fFat = false
            let lWeight = false
            let lFat = false

            // TODO use correct order (date/time)
            Object.keys(this.items).forEach(key => {
                if (!fWeight) fWeight = this.items[key].weight
                lWeight = this.items[key].weight
                if (!fFat) fFat = this.items[key].fat
                lFat = this.items[key].fat
            })

            return {
                weight: (fWeight - lWeight) * -1,
                fat: (fFat - lFat) * -1
            }
        }

    },

    methods: {

        loadItems () {
            this.loading = true
            this.$store.dispatch('logBody/read').then(res => {
                this.items = res
            }).catch(err => {
                this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
            }).finally(() => {
                this.loading = false
            })
        },

        deleteItem (item) {
            this.$store.dispatch('logBody/remove', item).then(res => {
                Vue.delete(this.items, item.id)
                this.$notify({ type: 'success', title: this.$t('alert.success.changed') })
            }).catch(err => {
                this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
            })
        }

    },

    mounted () {
        this.loadItems()
    },

    i18n: {
        messages: {
            en: {
                totalSum: 'Summary',
                tbl: {
                    time: 'Time',
                    title: 'Title',
                    weight: 'Weight',
                    fat: 'Body-Fat'
                }
            },
            de: {
                totalSum: 'Übersicht',
                tbl: {
                    time: 'Zeit',
                    title: 'Titel',
                    weight: 'Gewicht',
                    fat: 'Körperfett'
                }
            }
        }
    }

}
</script>
