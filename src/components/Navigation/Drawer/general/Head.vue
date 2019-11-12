<template>
    <v-list-item>
        <v-list-item-avatar>
            <v-img :src="require('@/assets/logo.svg')" contain />
        </v-list-item-avatar>
        <v-list-item-content>
        </v-list-item-content>
        <v-list-item-action>
            <v-btn large icon @click.stop="$store.dispatch('app/drawer')">
                <v-icon>mdi-menu</v-icon>
            </v-btn>
        </v-list-item-action>
    </v-list-item>
</template>
