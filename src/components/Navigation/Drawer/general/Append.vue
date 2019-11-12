<template>
    <v-list nav>
        <v-divider class="mb-2 mt-2" />
        <v-list-item :to="{name: 'about'}">
            <v-list-item-action>
                <v-icon color="grey darken-1">mdi-information-variant</v-icon>
            </v-list-item-action>
            <v-list-item-title class="grey--text text--darken-1">
                {{ $t('view.about.name') }}
            </v-list-item-title>
        </v-list-item>
        <v-list-item :to="{name: 'support'}">
            <v-list-item-action>
                <v-icon color="grey darken-1">mdi-face-agent</v-icon>
            </v-list-item-action>
            <v-list-item-title class="grey--text text--darken-1">
                {{ $t('view.support.name') }}
            </v-list-item-title>
        </v-list-item>
    </v-list>
</template>
