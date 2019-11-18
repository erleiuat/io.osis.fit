<template>
    <v-container fill-height>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-tabs v-model="tab" icons-and-text background-color="transparent" grow>
                        <v-tab key="andoid">
                            Android
                            <v-icon>mdi-android-head</v-icon>
                        </v-tab>
                        <v-tab key="apple">
                            Apple
                            <v-icon>mdi-apple</v-icon>
                        </v-tab>
                        <v-tab key="windows">
                            Windows
                            <v-icon>mdi-windows</v-icon>
                        </v-tab>
                    </v-tabs>

                    <v-tabs-items v-model="tab">

                        <v-tab-item key="android">
                            <v-card flat>
                                <v-card-text>
                                    {{ $t('browser') }}
                                </v-card-text>
                                <v-card-text>
                                    <v-expansion-panels>
                                        <Chrome />
                                        <Mozilla />
                                        <Samsung />
                                        <Edge />
                                    </v-expansion-panels>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>

                        <v-tab-item key="apple">
                            <v-card flat>
                                <v-card-text>
                                    {{ $t('browser') }}
                                </v-card-text>
                                <v-card-text>
                                    <v-expansion-panels>
                                        <Safari />
                                        <Chrome />
                                        <Mozilla />
                                        <Edge />
                                    </v-expansion-panels>
                                </v-card-text>
                            </v-card>
                        </v-tab-item>

                        <v-tab-item key="windows">
                            <v-card flat>
                                <v-card-text>
                                    {{ $t('browser') }} {{ $t('mobile') }}
                                </v-card-text>
                                <v-card-text>
                                    <v-expansion-panels>
                                        <Edge />
                                        <Chrome />
                                        <Mozilla />
                                    </v-expansion-panels>
                                </v-card-text>
                                <v-card-text>
                                    <WinChrome />
                                </v-card-text>
                            </v-card>
                        </v-tab-item>

                    </v-tabs-items>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Chrome from '@/views/main/Support/Install/Browsers/Chrome'
import Samsung from '@/views/main/Support/Install/Browsers/Samsung'
import Mozilla from '@/views/main/Support/Install/Browsers/Mozilla'
import Edge from '@/views/main/Support/Install/Browsers/Edge'
import Safari from '@/views/main/Support/Install/Browsers/Safari'
import WinChrome from '@/views/main/Support/Install/Browsers/WinChrome'

export default {

    components: {
        Chrome, Samsung, Mozilla, Edge, Safari, WinChrome
    },

    data () {
        return {
            tab: null
        }
    },

    mounted () {
        if (this.$route.query.plattform) {
            switch (this.$route.query.plattform) {
            case 'apple':
                this.tab = 1
                break
            case 'windows':
                this.tab = 2
                break
            default:
                this.tab = 0
                break
            }
        }
    },

    i18n: {
        messages: {
            en: {
                browser: 'Select your Browser:',
                install: 'Install App',
                mobile: '(Mobile)'
            },
            de: {
                browser: 'Wähle deinen Browser:',
                install: 'App installieren',
                mobile: '(Mobile)'
            }
        }
    }

}
</script>
