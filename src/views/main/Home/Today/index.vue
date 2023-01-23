<template>
    <v-container>

        <Adders />

        <v-row justify="center" align="center" dense>

            <v-col cols="12" sm="6" align-self="stretch">
                <Calories />
            </v-col>

            <v-col cols="12" sm="6" align-self="stretch">
                <Stats />
            </v-col>

            <v-col cols="12" md="8" align-self="stretch">
                <Weight />
            </v-col>

            <v-col cols="12" md="4" align-self="stretch">
                <Time />
            </v-col>

        </v-row>

    </v-container>
</template>

<script>
import Adders from '@/views/main/Home/Adders'
import Stats from '@/components/Facts/Stats'
import Weight from '@/components/Facts/Weight'
import Calories from '@/components/Facts/Calories'
import Time from '@/components/Facts/Time'

export default {

  components: {
    Adders, Stats, Weight, Calories, Time
  }

}
</script>
