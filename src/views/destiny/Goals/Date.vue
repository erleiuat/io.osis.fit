<template>
    <v-card flat>
        <v-card-title>
            {{ $t('goalDate') }}
            <v-spacer />
            <v-btn icon v-if="!edit" @click="edit = true">
                <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon v-else @click="saveChange()" :loading="$store.state.form.sending">
                <v-icon>mdi-content-save</v-icon>
            </v-btn>
        </v-card-title>
        <v-card-text v-if="!edit" class="text-center headline">
            {{ $dateFormat($store.state.destiny.goals.date) || '-' }}
        </v-card-text>
        <v-card-text v-else>
            <v-form v-model="form.valid" ref="form" @submit.prevent="saveChange()">
                <span class="caption">{{ $t('byWhen') }}</span>
                <v-text-field v-model="$store.state.destiny.goals.date" :rules="form.rules.date" :label="$t('form.date')" type="date" />
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

    data () {
        return {
            edit: false,
            form: {
                valid: false,
                rules: {
                    date: [
                        v => !!v || this.$t('alert.form.required'),
                        v => !isNaN(Date.parse(v)) || this.$t('alert.form.format.date')
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
                goalDate: 'Goal Date',
                byWhen: 'By when do you want to reach your goal?'
            },
            de: {
                goalDate: 'Ziel-Datum',
                byWhen: 'Bis wann möchtest du dein Ziel erreichen?'
            }
        }
    }

}
</script>
