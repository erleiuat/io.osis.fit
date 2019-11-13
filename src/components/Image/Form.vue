<template>
    <v-container>
        <v-row dense justify="center" align="center">
            <v-col cols="auto">
                <v-card link>
                    <RegularImage v-if="placeholder" :image="img" aspectRatio="1" width="200" :placeholder="placeholder" />
                    <RegularImage v-else :image="img" aspectRatio="1" width="200" />
                </v-card>
            </v-col>
        </v-row>
        <v-row dense justify="center" align="center">
            <v-col style="max-width:210px">
                <ImageUpload @delete="$emit('delete')" v-model="img" :loading="loading" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ImageUpload from '@/components/Image/Upload'
import RegularImage from '@/components/Image/Regular'

export default {

    components: {
        ImageUpload, RegularImage
    },

    props: {
        value: {
            type: [Object, String],
            default: null
        },
        placeholder: {
            type: String,
            default: null
        },
        loading: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        img: {
            get () {
                return this.value || false
            },
            set (val) {
                this.$emit('input', val)
            }
        }
    }

}
</script>
