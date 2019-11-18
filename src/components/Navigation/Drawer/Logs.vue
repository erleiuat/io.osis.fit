<template>
    <v-list-group prepend-icon="mdi-clipboard-pulse-outline" color="grey">
        <template v-slot:activator>
            <v-list-item-title>
                <b>{{ $t('view.log.name') }}</b>
            </v-list-item-title>
        </template>
        <v-list-item :to="{name: 'log.food'}" color="white" active-class="primary">
            <v-list-item-action />
            <v-list-item-title>
                {{ $t('view.log.food.name') }}
            </v-list-item-title>
        </v-list-item>
        <v-list-item :to="{name: 'log.activity'}" color="white" active-class="primary">
            <v-list-item-action />
            <v-list-item-title>
                {{ $t('view.log.activity.name') }}
            </v-list-item-title>
        </v-list-item>
        <v-list-item :to="{name: 'log.body'}" color="white" active-class="primary">
            <v-list-item-action />
            <v-list-item-title>
                {{ $t('view.log.body.name') }}
            </v-list-item-title>
        </v-list-item>
    </v-list-group>
</template>
