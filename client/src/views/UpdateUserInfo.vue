<template>
  <div>
    <user-menu />
    <profile-update-form />
  </div>
</template>

<script>
import UserMenu from '../components/UserMenu.vue'
import ProfileUpdateForm from '../components/ProfileUpdateForm.vue'
export default {
  components: {
    ProfileUpdateForm,
    UserMenu
  }
}
</script>
