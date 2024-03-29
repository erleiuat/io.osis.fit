<template>
  <v-container>

    <v-sheet>
      <v-row align="center" justify="center">
        <v-col cols="6" class="text-center">
          <span class="title text-center">
            {{ $t('tbl.weight') }}
          </span>
        </v-col>
        <v-col cols="6" class="text-center">
          <span class="title text-center">
            {{ $t('tbl.fat') }}
          </span>
        </v-col>
      </v-row>

      <v-divider />

      <v-row dense align="center" justify="center">
        <v-col cols="12" class="text-center caption pb-0">
          {{ $t('start') }}
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="6" class="text-center pt-0 mb-2">
          {{ Math.round(first.weight * 10) / 10  || '-' }} {{ $t('unit.kilogram.short') }}
        </v-col>
        <v-col cols="6" class="text-center pt-0 mb-2">
          {{ Math.round(first.fat * 10) / 10  || '-' }} {{ $t('unit.percentage.short') }}
          ({{ Math.round(first.fat / 100 * first.weight) }} {{ $t('unit.kilogram.short') }})
        </v-col>
      </v-row>

      <v-divider />

      <v-row dense align="center" justify="center">
        <v-col cols="12" class="text-center caption pb-0">
          {{ $t('current') }}
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="6" class="text-center pt-0 mb-2">
          {{ Math.round(current.weight * 10) / 10  || '-' }} {{ $t('unit.kilogram.short') }}
        </v-col>
        <v-col cols="6" class="text-center pt-0 mb-2">
          {{ Math.round(current.fat * 10) / 10  || '-' }} {{ $t('unit.percentage.short') }}
          ({{ Math.round(current.fat / 100 * current.weight) }} {{ $t('unit.kilogram.short') }})
        </v-col>
      </v-row>

      <v-divider />

      <v-row dense align="center" justify="center">
        <v-col cols="12" class="text-center caption pb-0">
          {{ $t('progress') }}
        </v-col>
      </v-row>
      <v-row align="center" justify="center">
        <v-col cols="6" class="text-center pt-0 mb-2">
          {{ Math.round(progress.weight * 10) /10  }} {{ $t('unit.kilogram.short') }}
        </v-col>
        <v-col cols="6" class="text-center pt-0 mb-2">
          {{ Math.round(progress.fat * 10) /10  }} {{ $t('unit.percentage.short') }}
          ({{ Math.round(current.fat / 100 * current.weight) - Math.round(first.fat / 100 * first.weight) }} {{ $t('unit.kilogram.short') }})
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
      loading: true
    }
  },

  computed: {

    current () {
      let current = this.$store.getters['logBody/current']
      return {
        weight: current.weight,
        fat: current.fat
      }
    },

    first () {
      let first = this.$store.getters['logBody/first']
      return {
        weight: first.weight,
        fat: first.fat
      }
    },

    progress () {
      return {
        weight: (this.first.weight - this.current.weight) * -1,
        fat: (this.first.fat - this.current.fat) * -1
      }
    },

    items () {
      return this.$store.getters['logBody/ordered']
    }

  },

  methods: {

    loadItems () {
      this.loading = true
      this.$store.dispatch('logBody/read').then().catch(err => {
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
        start: 'Start',
        current: 'Currently',
        progress: 'Progress',
        tbl: {
          time: 'Time',
          title: 'Title',
          weight: 'Weight',
          fat: 'Body-Fat'
        }
      },
      de: {
        start: 'Start',
        current: 'Aktuell',
        progress: 'Fortschritt',
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
