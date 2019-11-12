<template>
    <v-container>
        <v-row justify="space-between" align="center">
            <v-col cols="auto">
                Food-Log
            </v-col>
            <v-col cols="auto">
                <v-btn :to="{name: 'log.food.add'}" depressed color="primary">
                    <v-icon left>mdi-plus</v-icon>
                    {{ $t('button.new') }}
                </v-btn>
            </v-col>
        </v-row>

        <v-row>
            <router-view />
        </v-row>

    </v-container>
</template>
