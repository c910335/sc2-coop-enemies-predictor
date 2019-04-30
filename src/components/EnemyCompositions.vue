<template>
  <v-expansion-panel>
    <v-expansion-panel-content
      v-for="(enemyComposition, name) in enemyCompositions"
      :key="name"
      :class="colorClasses(name)"
    >
      <template v-slot:header>
        <div v-text="t(name)" />
      </template>
      <enemy-composition v-if="Array.isArray(enemyComposition)" :name="enemyComposition[0]" :enemy-composition="enemyComposition.slice(1)" />
      <enemy-compositions v-else :enemy-compositions="enemyComposition" :color="colorClass(name)" :darken="darkenNumber() + 1" />
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import EnemyComposition from '@/components/EnemyComposition'

export default {
  name: 'EnemyCompositions',
  props: ['enemyCompositions', 'color', 'darken'],
  components: {
    EnemyComposition
  },
  methods: {
    colorClasses(name) {
      return `${this.colorClass(name)} darken-${this.darkenNumber()} white--text`
    },
    colorClass(name) {
      return this.color || this.c(name)
    },
    darkenNumber() {
      return Number(this.darken) || 2
    }
  }
}
</script>
