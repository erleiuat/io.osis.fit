<template>
    <v-container fill-height>
        <v-row justify="center" align="center">
            <v-col cols="12" class="title text-center">
                {{ $t('title') }}
            </v-col>
            <v-col cols="auto">
                <v-chip label outlined>{{ $route.path }}</v-chip>
            </v-col>
            <v-col cols="12" class="body-1 text-center">
                {{ $t('text') }}
            </v-col>
            <v-col cols="12" md="6">
                <v-btn block color="primary" :to="{name: 'home'}">
                    {{ $t('backBtn') }}
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {

  i18n: {
    messages: {
      en: {
        title: '404 - Not found',
        text: 'This page was not found',
        backBtn: 'Go Home'
      },
      de: {
        title: '404 - Nicht gefunden',
        text: 'Diese Seite scheint nicht zu existieren',
        backBtn: 'Zur Startseite'
      }
    }
  }

}
</script>
