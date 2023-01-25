<template>
  <v-row dense>
    <v-col cols="4">
      <v-btn :to="{name: 'log.food.add'}" color="primary" depressed x-large block>
        <v-icon>mdi-plus</v-icon>
        <v-icon x-large>mdi-food-fork-drink</v-icon>
      </v-btn>
    </v-col>
    <v-col cols="4">
      <v-btn :to="{name: 'log.activity.add'}" color="primary" depressed x-large block>
        <v-icon>mdi-plus</v-icon>
        <v-icon x-large>mdi-run</v-icon>
      </v-btn>
    </v-col>
    <v-col cols="4">
      <v-btn :to="{name: 'log.body.add'}" color="primary" depressed x-large block>
        <v-icon>mdi-plus</v-icon>
        <v-icon x-large>mdi-scale-bathroom</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>
