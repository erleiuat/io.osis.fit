<template>
    <v-card @click.native="doSelect()" :link="selectable" flat style="height: 100%">
        <RegularImage :image="item.image" :noClick="selectable" :placeholder="require('@/assets/image/food.jpg')" aspectRatio="1" height="120px" />
        <v-card-title class="pt-2 pb-2 subtitle-1">
            {{ item.title }}
            <v-spacer v-if="editable || deletable" />
            <SafeDelete v-if="deletable" @click="$emit('delete', item)" />
            <v-btn v-if="editable" @click="$emit('edit', item)" icon>
                <v-icon small>mdi-pencil</v-icon>
            </v-btn>
        </v-card-title>
        <v-divider v-if="totals.calories || totals.fat || totals.protein"/>
        <v-card-text v-if="totals.calories || totals.fat || totals.protein" class="pt-1 pb-1">
            <v-chip-group>
                <v-chip small v-if="totals.calories">
                    {{ totals.calories }}{{ $t('unit.calories.short') }}
                </v-chip>
                <v-chip small v-if="totals.fat">
                    {{ totals.fat }}{{ $t('unit.gram.short') }} {{ $t('fat') }}
                </v-chip>
                <v-chip small v-if="totals.protein">
                    {{ totals.protein }}{{ $t('unit.gram.short') }} {{ $t('protein') }}
                </v-chip>
            </v-chip-group>
        </v-card-text>
    </v-card>
</template>

<script>
import RegularImage from '@/components/Image/Regular'
import SafeDelete from '@/components/SafeDelete'

export default {

    components: {
        RegularImage, SafeDelete
    },

    props: {
        item: {
            type: Object
        },
        editable: {
            type: Boolean,
            default: false
        },
        selectable: {
            type: Boolean,
            default: false
        },
        deletable: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        totals () {
            return {
                calories: Math.round((this.item.caloriesPer100 / 100 * this.item.portionSize) * 100) / 100,
                fat: Math.round((this.item.fatPer100 / 100 * this.item.portionSize) * 100) / 100,
                protein: Math.round((this.item.proteinPer100 / 100 * this.item.portionSize) * 100) / 100
            }
        }
    },

    methods: {
        doSelect () {
            if (this.selectable) this.$emit('select', this.item)
        }
    },

    i18n: {
        messages: {
            en: {
                fat: 'Fat',
                protein: 'Protein'
            },
            de: {
                fat: 'Fett',
                protein: 'Protein'
            }
        }
    }

}
</script>
