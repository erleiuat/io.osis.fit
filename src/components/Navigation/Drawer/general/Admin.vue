<template>
    <v-list-group v-if="$store.state.auth.account.level === 'admin'" color="grey" prepend-icon="mdi-monitor-cellphone-star">
        <template v-slot:activator>
            <v-list-item-title>
                <b>{{ $t('view.admin.name') }}</b>
            </v-list-item-title>
        </template>
        <v-list-item :to="{name: 'admin.log'}" color="white" active-class="primary">
            <v-list-item-action />
            <v-list-item-title>
                {{ $t('view.admin.log.name') }}
            </v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{name: 'admin.accounts'}" color="white" active-class="secondary">
            <v-list-item-action />
            <v-list-item-title>
                {{ $t('view.admin.accounts.name') }}
            </v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{name: 'admin.errorcodes'}" color="white" active-class="secondary">
            <v-list-item-action />
            <v-list-item-title>
                {{ $t('view.admin.errorcodes.name') }}
            </v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{name: 'admin.images'}" color="white" active-class="secondary">
            <v-list-item-action />
            <v-list-item-title>
                {{ $t('view.admin.images.name') }}
            </v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{name: 'theme'}" color="white" active-class="secondary">
            <v-list-item-action />
            <v-list-item-title>
                {{ $t('view.theme.name') }}
            </v-list-item-title>
        </v-list-item>
    </v-list-group>
</template>
