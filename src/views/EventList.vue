<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard
      v-for="event in events"
      :key="event.id"
      :event="event"
    ></EventCard>
    <template v-if="page != 1">
      <!-- For VueRouter API: see https://router.vuejs.org/api/#router-link-props -->
      <router-link
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
        >Previous page</router-link
      ><template v-if="hasNextPage"> | </template>
    </template>
    <router-link
      v-if="hasNextPage"
      :to="{ name: 'event-list', query: { page: page + 1 } }"
      rel="next"
      >Next page</router-link
    >
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
    // Setting eventsPerPage here, not in data, means it won't be reactive.
    // Don't need it to be reactive. This way our component has access to it.
    this.eventsPerPage = 3

    // call vuex action from within created lifecycle hook
    this.$store.dispatch('fetchEvents', {
      perPage: this.eventsPerPage,
      page: this.page
    })
  },
  // get access to our state (data being managed) using the mapState helper
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    hasNextPage() {
      return this.page * this.eventsPerPage < this.eventsTotal
    },
    ...mapState(['events', 'eventsTotal'])
  }
}
</script>
