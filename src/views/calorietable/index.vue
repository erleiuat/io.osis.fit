<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card-title>
                    Calories
                    <v-spacer></v-spacer>
                    <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details autofocus />
                </v-card-title>
                <v-data-table @click:row="hasClicked" :headers="headers" :items="items" :search="search"></v-data-table>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {

  props: {
    clickable: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      search: '',
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Amout', value: 'amout' },
        { text: 'Calories', value: 'calories' }
      ],
      items: this.$store.getters['calorietable/all']
    }
  },

  methods: {
    hasClicked (item) {
      if (this.clickable) {
        this.$emit('select', item)
      }
    }
  }

}
</script>
