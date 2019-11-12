<template>
    <v-container>
        <v-row>
            <v-col>
                <v-simple-table dense>
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th>time</th>
                                <th>title</th>
                                <th>totalCalories</th>
                                <th>totalFat</th>
                                <th>totalProtein</th>
                                <th>portionSize</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in items" :key="item.aLogFoodID">
                                <td>{{ item.date }} {{ item.time }}</td>
                                <td>{{ item.title }}</td>
                                <td>{{ item.totalCalories }}</td>
                                <td>{{ item.totalFat }}</td>
                                <td>{{ item.totalProtein }}</td>
                                <td>{{ item.portionSize }}</td>
                                <td>
                                    <v-btn icon @click="deleteItem(item)">
                                        <v-icon>mdi-delete</v-icon>
                                    </v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {

    data () {
        return {
            loading: true, // TODO
            items: [],
            filter: {
                year: null,
                week: null
            }
        }
    },

    methods: {
        getWeekNumber (d) {
            d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
            d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7))
            var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
            var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7)
            return [d.getUTCFullYear(), weekNo]
        },

        loadItems () {
            this.$store.dispatch('logFood/read', this.filter).then(res => {
                this.items = res
            }).catch(err => {
                this.$notify({ type: 'error', title: this.$t('alert.error.general'), text: err })
            }).finally(() => {
                this.loading = false
            })
        },

        deleteItem (item) {
            // TODO
        }

    },

    mounted () {
        var tmpParams = null
        if (this.$route.params.pathMatch) tmpParams = this.$route.params.pathMatch.split('/')
        else tmpParams = this.getWeekNumber(new Date())
        this.filter.year = tmpParams[0]
        this.filter.week = tmpParams[1] || 1
        this.loadItems()
    }

}
</script>
