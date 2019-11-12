<template>
    <v-list-group prepend-icon="mdi-settings-outline" color="grey">
        <template v-slot:activator>
            <v-list-item-title>
                <b>{{ $t('view.settings.name') }}</b>
            </v-list-item-title>
        </template>
        <v-list-item :to="{name: 'settings.account'}" color="white" active-class="secondary">
            <v-list-item-action />
            <v-list-item-title>
                {{ $t('view.settings.account.name') }}
            </v-list-item-title>
        </v-list-item>
        <v-list-item :to="{name: 'settings.app'}" color="white" active-class="secondary">
            <v-list-item-action />
            <v-list-item-title>
                {{ $t('view.settings.app.name') }}
            </v-list-item-title>
        </v-list-item>
    </v-list-group>
</template>
