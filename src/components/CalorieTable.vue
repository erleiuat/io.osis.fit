<template>
  <v-dialog v-model="dialog" fullscreen scrollable hide-overlay transition="fade-transition">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" depressed v-on="on" block>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="pt-2 pb-2 primary">
        <v-spacer></v-spacer>
        <v-btn icon dark @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text class="pt-1 pl-2 pr-2">
        <calorietable clickable @select="didSelect" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import calorietable from '@/views/calorietable/'

export default {

  components: {
    calorietable
  },

  data () {
    return {
      dialog: false
    }
  },

  methods: {
    didSelect (item) {
      this.dialog = false
      this.$emit('select', {
        title: item.name,
        portionSize: item.amount,
        caloriesPer100: item.calories,
        fatPer100: null,
        proteinPer100: null,
        carbsPer100: null
      })
    }
  }

}
</script>
