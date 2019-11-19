<template>
    <v-card flat style="height:100%;">
        <v-card-title class="pb-0">
            {{ $t('time') }}
        </v-card-title>
        <v-container>
            <v-row justify="space-around" align="center">
                <v-col cols="12" class="text-center display-1 pt-0">
                    123
                </v-col>
            </v-row>
            <v-spacer />
            <v-row justify="space-between" dense align="baseline">
                <v-col cols="12">
                    <v-progress-linear :value="10" height="25">
                        <strong>{{ 123 }} %</strong>
                    </v-progress-linear>
                </v-col>
            </v-row>

        </v-container>
    </v-card>
</template>

<script>
export default {

}
</script>
