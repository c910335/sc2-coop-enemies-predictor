<template>
  <v-app>
    <v-toolbar color="cyan" dark app>
      <v-toolbar-title class="headline">SC2 Co-op Enemies predictor</v-toolbar-title>
      <v-spacer />
      <v-btn
        href="http://github.com/c910335/sc2-coop-enemies-predictor"
        target="_blank"
        icon
      >
        <v-icon>fab fa-github</v-icon>
      </v-btn>
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
