<template>
    <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
                <v-icon>mdi-delete</v-icon>
            </v-btn>
        </template>
        <v-card @keyup.enter="yesPlease()">
            <v-card-title class="text-center">
                {{ $t('confirmDelete') }}
            </v-card-title>
            <v-card-text>
                {{ $t('doYouReally') }}
            </v-card-text>
            <v-divider />
            <v-card-actions>
                <v-btn color="primary" block text @click="yesPlease()">
                    {{ $t('button.delete') }}
                </v-btn>
            </v-card-actions>
            <v-divider />
            <v-card-actions>
                <v-btn block text @click="nope()">
                    {{ $t('button.cancel') }}
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {

    data () {
        return {
            dialog: false
        }
    },

    methods: {
        onkey (event) {
            if (event.key === 'Enter' && this.dialog) {
                this.yesPlease()
            }
        },
        yesPlease () {
            this.$emit('click')
            this.dialog = false
        },
        nope () {
            this.$emit('cancel')
            this.dialog = false
        }
    },

    created: function () {
        window.addEventListener('keydown', this.onkey)
    },

    i18n: {
        messages: {
            en: {
                confirmDelete: 'Confirm delete',
                doYouReally: 'Do you really want to delete this entry?'
            },
            de: {
                confirmDelete: 'Löschen bestätigen',
                doYouReally: 'Willst du diesen Eintrag löschen?'
            }
        }
    }

}
</script>
