<template>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="fade-transition">
        <template v-slot:activator="{ on }">
            <v-btn color="primary" depressed v-on="on" block>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
        </template>
        <v-card class="quagga-container">
            <calorietable clickable @select="didSelect" />
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
                proteinPer100: null
            })
        }
    }

}
</script>
