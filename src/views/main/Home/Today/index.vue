<template>
    <v-container>

        <Adders />

        <v-row justify="center" align="center" dense>

            <v-col cols="4">
                <CalsLeft />
            </v-col>

            <v-col cols="4" align-self="stretch">
                <Stats />
            </v-col>

            <v-col cols="4" align-self="stretch">
                <Weight />
            </v-col>

        </v-row>

    </v-container>
</template>

<script>
import Adders from '@/views/main/Home/Adders'
import Stats from '@/components/Facts/Stats'
import Weight from '@/components/Facts/Weight'
import CalsLeft from '@/components/Facts/CalsLeft'

export default {

    components: {
        Adders, Stats, Weight, CalsLeft
    }

}
</script>
