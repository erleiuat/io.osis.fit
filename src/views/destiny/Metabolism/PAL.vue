<template>
    <v-card flat>
        <v-card-title>
            <v-tooltip right>
                <template v-slot:activator="{ on }">
                    <span v-on="on">
                        {{ $t('pal') }} <v-icon x-small>mdi-help-circle-outline</v-icon>
                    </span>
                </template>
                <span>{{ $t('waaat') }}</span>
            </v-tooltip>
            <v-spacer />
            <v-btn icon v-if="!edit" @click="edit = true">
                <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon v-else @click="saveChange()" :loading="$store.state.form.sending">
                <v-icon>mdi-content-save</v-icon>
            </v-btn>
        </v-card-title>
        <v-card-text v-if="!edit && $store.state.destiny.metabolism.pal" class="text-center headline">
            {{ $store.state.destiny.metabolism.pal }} ({{ $t('pals.'+activePal+'.title') }})
        </v-card-text>
        <v-card-text v-else-if="!edit" class="text-center headline">
            -
        </v-card-text>
        <v-card-text v-else>
            <v-form v-model="form.valid" ref="form" @submit.prevent="saveChange()">
                <span class="caption">{{ $t('howActive') }}</span>
                <v-row dense justify="center" align="center">
                    <v-col cols="6" sm="4" md="" v-for="(item, key) in pals" :key="key" class="text-center">
                        <v-card :elevation="item.active ? 9 : 0" flat :color="item.active ? item.color : null">
                            <v-card-title class="pt-1 pb-1 pl-2 text-center">
                                {{ $t('pals.'+key+'.title') }}
                            </v-card-title>
                            <v-card-text class="pt-1 pb-4 pl-2 pr-2">
                                <v-icon x-large>
                                    {{ item.icon1 }}
                                </v-icon>
                                <v-icon x-large="">
                                    |
                                </v-icon>
                                <v-icon x-large>
                                    {{ item.icon2 }}
                                </v-icon>
                            </v-card-text>
                        </v-card>
                    </v-col>
                    <v-col cols="12" class="text-center caption" v-html="$t('pals.'+activePal+'.description')">
                    </v-col>
                </v-row>
                <v-slider v-model="slidePal" :min="95" :max="240" append-icon="mdi-plus" prepend-icon="mdi-minus" hide-details />
                <v-text-field class="pa-0" v-model="$store.state.destiny.metabolism.pal" :rules="form.rules.number" type="number" min="0.95" max="2.4" step="0.1" outlined />
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
                    number: [
                        v => !!v || this.$t('alert.form.required'),
                        v => !isNaN(v) || this.$t('alert.form.format.number'),
                        v => v >= 0.95 || this.$t('alert.form.tooSmall', { amount: 0.95 }),
                        v => v <= 2.4 || this.$t('alert.form.tooBig', { amount: 2.4 })
                    ]
                }
            }
        }
    },

    computed: {
        slidePal: {
            get () {
                return (this.$store.state.destiny.metabolism.pal || 1.2) * 100
            },
            set (val) {
                this.$store.state.destiny.metabolism.pal = val / 100
            }
        },
        activePal () {
            for (const key in this.pals) {
                if (this.pals[key].active) return key
            }
            console.log(this.pals)
            return false
        },
        pals () {
            var pal = this.$store.state.destiny.metabolism.pal
            var rgb = (pal - 0.95) / 1.45 * 255
            var color = 'rgba(' + rgb + ', 127,' + (255 - rgb) + ',1)'
            return {
                1: {
                    icon1: 'mdi-wheelchair-accessibility',
                    icon2: 'mdi-sleep',
                    active: pal < 1.4,
                    color: color
                },
                2: {
                    icon1: 'mdi-seat-outline',
                    icon2: 'mdi-desktop-classic',
                    active: (pal >= 1.4 && pal < 1.6),
                    color: color
                },
                3: {
                    icon1: 'mdi-school',
                    icon2: 'mdi-taxi',
                    active: (pal >= 1.6 && pal < 1.8),
                    color: color
                },
                4: {
                    icon1: 'mdi-store',
                    icon2: 'mdi-room-service-outline',
                    active: (pal >= 1.8 && pal < 2),
                    color: color
                },
                5: {
                    icon1: 'mdi-worker',
                    icon2: 'mdi-tractor',
                    active: pal >= 2,
                    color: color
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
                pal: 'PAL',
                waaat: 'Physical Activity Level',
                howActive: 'How active are you on average in your everyday life?',
                pals: {
                    1: {
                        title: 'Low',
                        description: 'Sitting and lying activities only <br/> (like sleeping all day / frail people)'
                    },
                    2: {
                        title: 'Simple',
                        description: 'Mostly sitting, little physical activity <br/> (such as office work at the desk)'
                    },
                    3: {
                        title: 'Medium',
                        description: 'Mainly sitting, partly walking and standing <br/> (like students and taxi drivers)'
                    },
                    4: {
                        title: 'Heavy',
                        description: 'Mainly walking and standing <br/> (like sellers and waiters)'
                    },
                    5: {
                        title: 'Extreme',
                        description: 'Physically strenuous work <br/> (like farmers and construction workers)'
                    }
                }
            },
            de: {
                pal: 'PAL',
                waaat: 'Physical Activity Level (körperliche Aktivität / Leistungsumsatz)',
                howActive: 'Wie aktiv bist du durchschnittlich in deinem Alltag?'
            }
        }
    }

}
</script>
