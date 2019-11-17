<template>
    <v-card flat :color="state">
        <v-card-title>
            {{ $t('goalWeight') }}
            <v-spacer />
            <v-btn icon v-if="!edit" @click="edit = true">
                <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon v-else @click="saveChange()" :loading="$store.state.form.sending">
                <v-icon>mdi-content-save</v-icon>
            </v-btn>
        </v-card-title>
        <v-card-text v-if="!edit" class="text-center headline">
            {{ $store.state.destiny.goals.weight || '-' }} {{ $t('unit.kilogram.short') }}
        </v-card-text>
        <v-card-text v-else>
            <v-form v-model="form.valid" ref="form" @submit.prevent="saveChange()">
                <span class="caption">{{ $t('howMuch') }}</span>
                <v-text-field v-model="$store.state.destiny.goals.weight" :rules="form.rules.number" :label="$t('inKg')" :suffix="$t('unit.kilogram.short')" type="number" />
                <v-btn type="submit" depressed color="primary" block :loading="$store.state.form.sending">
                    <v-icon left>mdi-content-save</v-icon>
                    {{ $t('button.save') }}
                </v-btn>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
export default {

    props: {
        state: {
            type: String,
            default: null
        }
    },

    data () {
        return {
            edit: false,
            form: {
                valid: false,
                rules: {
                    number: [
                        v => !!v || this.$t('alert.form.required'),
                        v => !isNaN(v) || this.$t('alert.form.format.number')
                    ]
                }
            }
        }
    },

    methods: {
        saveChange () {
            if (!this.$refs.form.validate()) return false
            this.$store.commit('form/send')
            this.edit = false
        }
    },

    i18n: {
        messages: {
            en: {
                goalWeight: 'Goal Weight',
                howMuch: 'How much do you want to weigh?',
                inKg: 'in Kilograms'
            },
            de: {
                goalWeight: 'Ziel-Gewicht',
                howMuch: 'Wie viel möchtest du wiegen?',
                inKg: 'in Kilogramm'
            }
        }
    }

}
</script>
