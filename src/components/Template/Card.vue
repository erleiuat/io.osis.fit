<template>
  <v-card @click.native="doSelect()" :link="selectable" style="height: 100%">
    <RegularImage :image="item.image" :noClick="selectable" contain :placeholder="require('@/assets/image/food.jpg')" aspectRatio="1" height="240px" />
    <v-card-title class="py-2 body-2 px-2 card-title">
      {{ item.title }}
    </v-card-title>
    <v-divider v-if="totals.calories || totals.fat || totals.protein"/>
    <v-card-text v-if="totals.calories || totals.fat || totals.protein" class="py-1 px-2 chips-group">
      <v-row dense align="center" justify="center">
        <v-col cols="4" class="text-center">
          {{ $t('unit.calories.short') }}<br />{{ totals.calories }}
        </v-col>
        <v-col cols="4" class="text-center">
          {{ $t('fat') }}<br />{{ totals.fat }}{{ $t('unit.gram.short') }}
        </v-col>
        <v-col cols="4" class="text-center">
          {{ $t('protein') }}<br />{{ totals.protein }}{{ $t('unit.gram.short') }}
        </v-col>
      </v-row>
    </v-card-text>
    <v-divider v-if="editable || deletable"/>
    <v-row dense justify="space-between">
      <v-col cols>
        <SafeDelete v-if="deletable" @click="$emit('delete', item)" />
      </v-col>
      <v-col style="text-align:right;">
        <v-btn v-if="editable" @click="$emit('edit', item)" icon>
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </v-col>
    </v-row>
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

<style>
.card-title {
    height: 36px;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100%;
    overflow: hidden;
    display: block;
}
</style>
