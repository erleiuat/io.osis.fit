<template>
  <v-container>

    <v-row align="center" justify="center">
      <v-col cols="auto">
        <Avatar />
      </v-col>
      <v-col lg="8" class="text-center">
        <General />
        <span class="caption">
          ID <i>{{ $store.state.auth.account.id }}</i>
        </span>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-divider />
      </v-col>
      <v-col cols="12">
        <div class="headline">
          {{ $t('actions') }}
        </div>
      </v-col>
    </v-row>

    <Verify v-if="$store.state.auth.account.status === 'unverified'" />

    <v-row dense justify="center" align="center">
      <v-col cols="12" md="">
        <v-btn block depressed :to="{name: 'auth.logout'}">
          {{ $t('logout') }}
        </v-btn>
      </v-col>
      <v-col cols="12" md="">
        <Password />
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import Avatar from '@/views/general/settings/Account/Avatar'
import General from '@/views/general/settings/Account/General'
import Password from '@/views/general/settings/Account/Password'
import Verify from '@/views/general/settings/Account/Verify'

export default {

  components: {
    Avatar, General, Password, Verify
  },

  i18n: {
    messages: {
      en: {
        logout: 'Logout',
        account: 'Account',
        actions: 'Actions'
      },
      de: {
        logout: 'Abmelden',
        account: 'Benutzerkonto',
        actions: 'Aktionen'
      }
    }
  }

}
</script>
