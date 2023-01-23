<template>
    <v-container fill-height>

        <v-row dense justify="center" align="center">
            <v-col cols="12" class="display-1 text-center">
                {{ $t('reset') }}
            </v-col>
            <v-col cols="12" class="caption text-center">
                {{ $t('followThese') }}
            </v-col>
        </v-row>

        <Request v-if="step === 'request'" />
        <Change v-else />

        <v-row dense justify="center" align="center">
            <v-col cols="12">
                <v-divider />
            </v-col>
            <v-spacer />
            <v-col cols="auto" class="caption">
                <router-link :to="{name: 'about'}">
                    {{ $t('about') }}
                </router-link>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
import Request from '@/views/auth/forgotten/Request'
import Change from '@/views/auth/forgotten/Change'

export default {

  components: {
    Request, Change
  },

  computed: {
    step () {
      if (this.$route.query.change) return 'change'
      else return 'request'
    }
  },

  i18n: {
    messages: {
      en: {
        reset: 'Reset Password',
        followThese: 'Follow these steps to get a new password'
      },
      de: {
        reset: 'Passwort zurücksetzen',
        followThese: 'Folge diesen Schritten, um ein neues Passwort anzufordern'
      }
    }
  }

}
</script>
