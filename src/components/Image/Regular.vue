<template>
    <v-dialog v-model="dialog" fullscreen>
        <template v-if="getError()" v-slot:activator="{ on }">
            <v-img :aspect-ratio="aspectRatio" :width="width" :height="height">
                <v-row class="fill-height ma-0 error" align="center" justify="center">
                    <span class="white--text title text-center">
                        <v-icon dark x-large>mdi-file-alert-outline</v-icon>
                        <br />{{ $t('fileNotFound') }}
                    </span>
                </v-row>
            </v-img>
        </template>
        <template v-else-if="!pic" v-slot:activator="{ on }">
            <v-img :src="placeholder" :aspect-ratio="aspectRatio" :width="width" :height="height" />
        </template>
        <template v-else-if="!noClick" v-slot:activator="{ on }">
            <v-img :src="pic.small" :lazy-src="pic.lazy" :aspect-ratio="aspectRatio" :width="width" :height="height" v-on="on" @error="setError(true)" style="cursor:pointer;">
                <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                        <v-progress-circular indeterminate color="grey" />
                    </v-row>
                </template>
            </v-img>
        </template>
        <template v-else v-slot:activator="{ on }">
            <v-img :src="pic.small" :lazy-src="pic.lazy" :aspect-ratio="aspectRatio" :width="width" :height="height" @error="setError(true)">
                <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                        <v-progress-circular indeterminate color="grey" />
                    </v-row>
                </template>
            </v-img>
        </template>
        <v-card v-if="!getError()" tile dark height="100%">
            <v-container fluid class="pt-0 pl-0 reg-img-container">
                <v-row>
                    <v-col cols="12" class="pt-0 pr-0">
                        <v-toolbar flat class="transparent">
                            <v-btn icon :href="pic.original" :download="pic.name" target="_blank">
                                <v-icon large>mdi-download</v-icon>
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn icon @click="dialog = false">
                                <v-icon large>mdi-close</v-icon>
                            </v-btn>
                        </v-toolbar>
                    </v-col>
                </v-row>
                <v-row class="reg-img-verticalCenter">
                    <v-col cols="12" class="pa-0">
                        <v-img v-if="!pic.error" :src="pic.medium" :lazy-src="pic.small" @error="setError(true)" contain style="max-height:85vh;max-width:100vw;">
                            <template v-slot:placeholder>
                                <v-row class="fill-height ma-0" align="center" justify="center">
                                    <v-progress-circular indeterminate color="white" />
                                </v-row>
                            </template>
                        </v-img>
                        <v-img v-else contain style="max-height:85vh;max-width:100vw;">
                            <template v-slot:placeholder>
                                <v-row class="fill-height ma-0 error" align="center" justify="center">
                                    <span class="white--text title text-center">
                                        <v-icon dark x-large>mdi-file-alert-outline</v-icon>
                                        <br />{{ $t('fileNotFound') }}
                                    </span>
                                </v-row>
                            </template>
                        </v-img>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
export default {

    props: {
        image: {
            type: [Object, Boolean],
            default: false
        },
        aspectRatio: [String, Number],
        width: [String, Number],
        height: [String, Number],
        placeholder: {
            type: String,
            default: require('@/assets/image/noFile.jpg')
        },
        noClick: {
            type: Boolean,
            default: false
        }
    },

    data () {
        return {
            dialog: false,
            error: false
        }
    },

    computed: {

        pic () {
            if (!this.image) {
                this.setError(false)
                return false
            }
            return {
                name: this.image.name,
                original: this.image.path,
                medium: this.image.path_medium,
                small: this.image.path_small,
                lazy: this.image.path_lazy,
                error: this.error
            }
        }

    },

    methods: {

        getError () {
            if (!this.image) this.error = false
            return this.error
        },

        setError (val) {
            this.error = val
        }

    },

    i18n: {
        messages: {
            en: {
                fileNotFound: 'File not available'
            },
            de: {
                fileNotFound: 'Datei nicht verfügbar'
            }
        }
    }

}
</script>

<style>
.reg-img-container {
    position: relative;
  height: 100%;
}
.reg-img-verticalCenter {
  margin: 0;
  width: 100%;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>
