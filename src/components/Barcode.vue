<template>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="fade-transition">
        <template v-slot:activator="{ on }">
            <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
        </template>
        <v-card>
            <!--
            <v-toolbar dark color="primary">
                <v-btn icon dark @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Settings</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn dark text @click="dialog = false">Save</v-btn>
                </v-toolbar-items>
            </v-toolbar>
            -->
            <v-container>
                <v-row>
                    <v-col cols="12" class="pa-0">
                        <div class="quagga-scanner-container">
                            <v-quagga :onDetected="scanned" :aspectRatio="aspect" :readerSize="size" :readerTypes="types" />
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
import Vue from 'vue'
import VueQuagga from 'vue-quaggajs'
Vue.use(VueQuagga)

export default {

    data () {
        return {
            dialog: false,
            size: {
                width: 600,
                height: 500
            },
            aspect: {
                min: 1,
                max: 1
            },
            types: ['ean_reader']
        }
    },

    methods: {
        scanned (data) {
            console.log(data)
        }
    }

}
</script>

<style>
.quagga-scanner-container {
    height: 70vh;
    width: 100%;
    overflow: hidden;
    /*border: solid 1px gray;*/
}
.quagga-scanner-container video, .quagga-scanner-container canvas {
    height: 80vh !important;
    width: 100% !important;
}
</style>
