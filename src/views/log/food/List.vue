<template>
    <v-container>

        <v-row align="center" justify="center">
            <v-col cols="12" md="6">
                <TableNavi :value="filter.year" :label="$t('year')" @input="setFilter($event, false)" />
            </v-col>
            <v-col cols="12" md="6">
                <TableNavi :value="filter.week" :label="$t('week')" @input="setFilter(false, $event)" />
            </v-col>
        </v-row>

        <v-sheet>
            <v-row dense align="center" justify="center">
                <v-col cols="12" class="text-center caption">
                    {{ $t('weekSum') }}
                </v-col>
            </v-row>
            <v-divider />
            <v-row align="center" justify="center">
                <v-col cols="4" class="text-center">
                    <span class="title text-center">
                        {{ $t('tbl.totalCalories') }}
                    </span><br />
                    {{ total.calories }} {{ $t('unit.calories.short') }}
                </v-col>
                <v-col cols="4" class="text-center">
                    <span class="title text-center">
                        {{ $t('tbl.totalFat') }}
                    </span><br />
                    {{ total.fat }} {{ $t('unit.gram.short') }}
                </v-col>
                <v-col cols="4" class="text-center">
                    <span class="title text-center">
                        {{ $t('tbl.totalProtein') }}
                    </span><br />
                    {{ total.protein }} {{ $t('unit.gram.short') }}
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
                                            <th>{{ $t('tbl.title') }}</th>
                                            <th>{{ $t('tbl.totalCalories') }}</th>
                                            <th>{{ $t('tbl.totalFat') }}</th>
                                            <th>{{ $t('tbl.totalProtein') }}</th>
                                            <th>{{ $t('tbl.portionSize') }}</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in items" :key="item.id">
                                            <td>{{ $dateFormat(item.date) }} {{ item.time }}</td>
                                            <td>{{ item.title || '-' }}</td>
                                            <td>{{ item.totalCalories || 0 }} {{ $t('unit.calories.short') }}</td>
                                            <td>{{ item.totalFat || 0 }} {{ $t('unit.gram.short') }}</td>
                                            <td>{{ item.totalProtein || 0 }} {{ $t('unit.gram.short') }}</td>
                                            <td>{{ item.portionSize || 0 }} {{ $t('unit.gram.short') }}</td>
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
import TableNavi from '@/components/TableNavi'

export default {

    components: {
        TableNavi
    },

    data () {
        return {
            loading: true,
            items: [],
            filter: {
                year: null,
                week: null
            }
        }
    },

    computed: {

        total () {
            let tCalories = 0
            let tFat = 0
            let tProtein = 0

            Object.keys(this.items).forEach(key => {
                tCalories += this.items[key].totalCalories
                tFat += this.items[key].totalFat
                tProtein += this.items[key].totalProtein
            })

            return {
                calories: tCalories,
                fat: tFat,
                protein: tProtein
            }
        }

    },

    methods: {

        setFilter (year, week) {
            if (year) this.filter.year += year
            if (week) this.filter.week += week
            this.$router.replace({ params: { year: this.filter.year, week: this.filter.week } })
            this.loadItems()
        },

        loadItems () {
            this.loading = true
            this.$store.dispatch('logFood/read', this.filter).then(res => {
                this.items = res
            }).catch(err => {
                this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
            }).finally(() => {
                this.loading = false
            })
        },

        deleteItem (item) {
            this.$store.dispatch('logFood/remove', item).then(res => {
                Vue.delete(this.items, item.id)
                this.$notify({ type: 'success', title: this.$t('alert.success.changed') })
            }).catch(err => {
                this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
            })
        }

    },

    mounted () {
        var tmpParams = this.$store.state.app.current
        this.filter.year = parseInt(this.$route.params.year || tmpParams.year)
        this.filter.week = parseInt(this.$route.params.week || tmpParams.week)
        this.loadItems()
    },

    i18n: {
        messages: {
            en: {
                year: 'Year',
                week: 'Week',
                weekSum: 'Weekly summary',
                tbl: {
                    time: 'Time',
                    title: 'Title',
                    totalCalories: 'Total Calories',
                    totalFat: 'Total Fat',
                    totalProtein: 'Total Protein',
                    portionSize: 'Serving size'
                }
            },
            de: {
                year: 'Jahr',
                week: 'Woche',
                weekSum: 'Wochenübersicht',
                tbl: {
                    time: 'Zeit',
                    title: 'Titel',
                    totalCalories: 'Total Kalorien',
                    totalFat: 'Total Fett',
                    totalProtein: 'Total Protein',
                    portionSize: 'Portionsgrösse'
                }
            }
        }
    }

}
</script>
