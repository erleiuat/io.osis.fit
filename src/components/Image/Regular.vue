<template>
  <v-dialog v-model="dialog" fullscreen transition="fade-transition">
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
      <div :style="'background-image: url('+pic.lazy+')'" class="img-backdrop">
        <v-img :src="pic.small" :lazy-src="pic.lazy" :contain="contain" :aspect-ratio="aspectRatio" :width="width" :height="height" v-on="on" @error="setError(true)" style="cursor:pointer;">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey" />
            </v-row>
          </template>
        </v-img>
      </div>
    </template>
    <template v-else v-slot:activator="{ on }">
      <div :style="'background-image: url('+pic.lazy+')'" class="img-backdrop">
        <v-img :src="pic.small" :lazy-src="pic.lazy" :contain="contain" :aspect-ratio="aspectRatio" :width="width" :height="height" @error="setError(true)">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey" />
            </v-row>
          </template>
        </v-img>
      </div>
    </template>
    <v-card v-if="!getError()" tile dark height="100%" :style="'background-image: url('+pic.lazy+')'" class="reg-img-card">
      <v-container fluid fill-height class="pt-0 pb-0 reg-img-container">
        <v-row class="reg-img-container-inner">

          <v-col cols="12" class="pt-0 reg-img-toolbar">
            <v-toolbar flat class="transparent">
              <v-btn icon :href="pic.original" :download="pic.name" target="_blank">
                <v-icon large>mdi-download</v-icon>
              </v-btn>
              <v-spacer />
              <v-btn icon @click="dialog = false">
                <v-icon large>mdi-close</v-icon>
              </v-btn>
            </v-toolbar>
          </v-col>

          <v-col cols="12" class="pa-0">
            <v-img v-if="!pic.error" :src="pic.original" :lazy-src="pic.small" @error="setError(true)" contain class="reg-img-fullscreen">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="white" />
                </v-row>
              </template>
            </v-img>
            <v-img v-else contain class="reg-img-fullscreen">
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
    },
    contain: {
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
  .img-backdrop {
    width: 100%;
    height: auto;
  }

  .img-backdrop .v-image__image {
    backdrop-filter: blur(4px);
  }

  .img-backdrop,
  .reg-img-card {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .reg-img-toolbar {
    height: 100%;
    z-index: 200 !important;
    position: absolute;
  }

  .reg-img-toolbar .v-btn * {
    text-shadow: 0 0 8px rgba(0, 0, 0, 0.75);
  }

  .reg-img-container-inner {
    backdrop-filter: blur(20px);
    height: 100%;
    position: relative;
  }

  .reg-img-container {
    max-width: 100vw;
    overflow: hidden;
  }

  .reg-img-fullscreen {
    z-index: 100 !important;
    max-width: 100vw;
    max-height: 100vh;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
</style>
