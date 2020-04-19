<template>
  <div class="notification-container">
    <!-- send notification object as prop down to child NotificationBar component -->
    <NotificationBar
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import NotificationBar from '@/components/NotificationBar.vue'
import { mapState } from 'vuex'

export default {
  components: {
    NotificationBar
  },
  computed: mapState('notification', ['notifications']) // getting state from vuex notification module
}
</script>

<style scoped>
.notification-container {
  position: fixed;
  bottom: 0;
}
</style>
