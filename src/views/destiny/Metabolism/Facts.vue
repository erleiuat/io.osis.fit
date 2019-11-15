<template>
    <v-container>
        <v-row no-gutters justify="center" align="center">
            <v-col class="text-center">
                <span class="title">
                    {{ $t('timeRemaining') }}
                </span>
            </v-col>
            <v-divider vertical />
            <v-col class="text-center">
                <span class="title">
                    {{ $t('requiredLoss') }}
                </span>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {

    computed: {

    },

    i18n: {
        messages: {
            en: {

            },
            de: {

            }
        }
    }

}
</script>
