<template>
  <v-app>
    <v-toolbar color="cyan" dark app>
      <v-toolbar-title class="headline">
        <span>SC2 Co-op Enemies predictor</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <enemy-compositions :enemy-compositions="enemies" />
    </v-content>
  </v-app>
</template>

<script>
import EnemyCompositions from '@/components/EnemyCompositions'

export default {
  name: 'App',
  components: {
    EnemyCompositions
  }
}
</script>
