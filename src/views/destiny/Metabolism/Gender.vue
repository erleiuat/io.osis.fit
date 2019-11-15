<template>
    <v-card flat>
        <v-card-title>
            {{ $t('gender') }}
        </v-card-title>
        <v-container>
            <v-row no-gutters justify="center" align="center">
                <v-col cols="6" class="text-center">
                    <v-btn @click="setGender('male')" :color="selected.male" :loading="$store.state.form.sending" text x-large>
                        <v-icon x-large>mdi-human-male</v-icon>
                    </v-btn>
                </v-col>
                <v-col cols="6" class="text-center">
                    <v-btn @click="setGender('female')" :color="selected.female" :loading="$store.state.form.sending" text x-large>
                        <v-icon x-large>mdi-human-female</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
export default {

    data () {
        return {
            edit: false
        }
    },

    computed: {
        selected () {
            var tmp = this.$store.state.destiny.metabolism.gender
            return {
                male: (tmp === 'male' ? 'primary' : null),
                female: (tmp === 'female' ? 'primary' : null)
            }
        }
    },

    methods: {
        setGender (gender) {
            this.$store.state.destiny.metabolism.gender = gender
            this.$store.commit('form/send')
        }
    },

    i18n: {
        messages: {
            en: {
                gender: 'Gender',
                byWhen: 'By when do you want to reach your goal?'
            },
            de: {
                gender: 'Geschlecht',
                byWhen: 'Bis wann möchtest du dein Ziel erreichen?'
            }
        }
    }

}
</script>
