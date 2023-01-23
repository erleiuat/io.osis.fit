<template>
    <div>

        <v-dialog v-model="show" width="500">
            <v-card>

                <v-card-title class="title">
                    Error Details
                    <v-spacer />
                    <v-btn icon @click="show = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text>
                    <div class="headline">{{ title }}</div>
                </v-card-text>
                <v-card-text>
                    <div class="body-2">{{ text }}</div>
                </v-card-text>

            </v-card>
        </v-dialog>

        <notifications position="bottom center" width="100%" :speed="500">
            <template slot="body" slot-scope="props">
                <v-container fluid class="pb-0 pt-0">
                    <v-alert :type="props.item.type" dismissible class="elevation-2" :max-width="600">
                        <v-row justify="center" align="center" no-gutters>
                            <v-col cols="11">
                                {{ props.item.title }}
                            </v-col>
                            <v-col cols="1" align="end" v-if="props.item.text">
                                <v-btn icon small @click="showDetail(props.item)">
                                    <v-icon>mdi-information-outline</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-alert>
                </v-container>
            </template>
        </notifications>

    </div>
</template>

<script>
export default {

  data () {
    return {
      show: false,
      title: null,
      text: null
    }
  },

  methods: {
    showDetail (content) {
      this.title = content.title
      this.text = content.text
      this.show = true
    }
  }

}
</script>
