<template>
  <v-list>
    <v-subheader v-text="t(name)"/>
    <v-list-tile
      v-for="(enemies, i) in enemyComposition"
      :key="i"
      >
      <v-list-tile-content v-text="enemies.map(e => t(e)).join(t(', '))" />
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  name: 'EnemyComposition',
  props: ['name', 'enemyComposition']
}
</script>
