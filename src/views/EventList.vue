<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard
      v-for="event in events"
      :key="event.id"
      :event="event"
    ></EventCard>
    <BaseIcon />
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    EventCard
  },
  created() {
    // call vuex action from within created lifecycle hook
    this.$store.dispatch('fetchEvents')
  },
  // get access to our state (data being managed) using the mapState helper
  computed: mapState(['events'])
}
</script>
