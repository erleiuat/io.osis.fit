<template>
  <v-container fill-height>

    <v-row justify="center">
      <v-col cols="auto">
        <v-switch v-model="mode" label="Switch Mode" />
      </v-col>
      <v-col cols="auto">
        <v-select :items="langItems" v-model="lang" label="Change Locale" />
      </v-col>
    </v-row>

    <v-row justify="center" align="center">
      <v-col cols="12" md="6" v-for="opt in textStyles" :key="opt">
        <v-row dense>
          <v-col cols="12" md="4">
            <v-chip outlined>{{ opt }}</v-chip>
          </v-col>
          <v-col cols="12" md="8">
            <div :class="opt">{{ text }}</div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6" v-for="opt in colors" :key="opt">
        <v-card :color="opt">
          <v-card-text>
            <v-layout wrap>
              <v-flex xs6 class="headline">
                {{ text }}
              </v-flex>
              <v-flex xs6 text-right>
                <v-chip>{{ opt }}</v-chip>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6" v-for="opt in colors" :key="opt">
        <v-btn block :color="opt">
          <div class="body-2">{{ opt || text }}</div>
        </v-btn>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  name: 'Theme',

  data () {
    return {
      text: 'Osis.fit',
      alerts: [
        'success',
        'error',
        'warning',
        'info'
      ],
      textStyles: [
        'display-4',
        'display-3',
        'display-2',
        'display-1',
        'headline',
        'title',
        'subtitle-1',
        'subtitle-2',
        'body-1',
        'body-2',
        'caption',
        'overline'
      ],
      colors: [
        '',
        'primary',
        'secondary',
        'accent',
        'success',
        'error',
        'warning',
        'info'
      ],
      langItems: [
        { value: 'de', text: 'Deutsch' },
        { value: 'en', text: 'English' }
      ]
    }
  },

  computed: {

    mode: {
      get () {
        return this.$store.state.app.dark
      },
      set (val) {
        this.$store.dispatch('app/dark', val)
      }
    },

    lang: {
      get () {
        return this.$store.state.app.locale
      },
      set (val) {
        this.$store.dispatch('app/locale', val)
      }
    }

  }

}
</script>
