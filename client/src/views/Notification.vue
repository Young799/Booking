<template>
  <div>
      <user-menu/>
    <Notification />
  </div>
</template>

<script>
import Notification from '../components/NotificationTable.vue'
import UserMenu from '../components/UserMenu.vue'
export default {
  components: {
    Notification,
    UserMenu
  }
}
</script>
