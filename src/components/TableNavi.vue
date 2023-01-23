<template>
    <v-sheet>
        <v-container class="pt-0 pb-0 pl-1 pr-1">
            <v-row dense align="center" justify="space-between">
                <v-col cols="auto">
                    <v-btn @click="$emit('input', -1)" depressed icon>
                        <v-icon large>mdi-chevron-left</v-icon>
                    </v-btn>
                </v-col>
                <v-col cols="auto" class="text-center">
                    {{ label }} {{ value }}
                </v-col>
                <v-col cols="auto">
                    <v-btn @click="$emit('input', +1)" depressed icon>
                        <v-icon large>mdi-chevron-right</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-sheet>
</template>

<script>
export default {
  props: ['value', 'label']
}
</script>
