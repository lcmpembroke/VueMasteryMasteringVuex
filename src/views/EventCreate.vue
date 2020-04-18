<template>
  <div>
    <h1>Create an Event - {{ user.name }}</h1>

    <form @submit.prevent="createEvent">
      <label>Select a category</label>
      <select v-model="event.category">
        <option v-for="cat in categories" :key="cat">{{ cat }}</option>
      </select>
      <h3>Name & describe your event</h3>
      <div class="field">
        <label>Title</label>
        <input
          v-model="event.title"
          type="text"
          placeholder="Add an event title"
        />
      </div>
      <div class="field">
        <label>Description</label>
        <input
          v-model="event.description"
          type="text"
          placeholder="Add a description"
        />
      </div>
      <h3>Where is your event?</h3>
      <div class="field">
        <label>Location</label>
        <input
          v-model="event.location"
          type="text"
          placeholder="Add a location"
        />
      </div>
      <h3>When is your event?</h3>
      <div class="field">
        <label>Date</label>
        <datepicker v-model="event.date" placeholder="Select a date" />
      </div>
      <div class="field">
        <label>Select a time</label>
        <select v-model="event.time">
          <option v-for="time in times" :key="time">{{ time }}</option>
        </select>
      </div>
      <input type="submit" class="button -fill-gradient" value="Submit" />
    </form>

    <hr />
    <p>------------ This event was created by {{ user.id }}</p>

    <p>{{ getEventById(2) }}</p>
    <p>There are {{ categories.length }} categories</p>
    <ul>
      <li v-for="category in categories" :key="category">
        {{ category }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import DatePicker from 'vuejs-datepicker'

export default {
  components: {
    datepicker: DatePicker
  },
  data() {
    const times = []
    for (let i = 1; i <= 24; i++) {
      times.push(i + ':00')
    }
    return {
      event: this.createFreshEventObject(),
      times: times
    }
  },
  methods: {
    createEvent() {
      // called from submission of form
      // dispatches action defined as createEvent() in src/store/index.js
      this.$store
        .dispatch('createEvent', this.event)
        .then(() => {
          // show the user the event just created
          this.$router.push({
            name: 'event-show',
            params: { id: this.event.id }
          })
          // clear out event object if event successfully added to database
          this.event = this.createFreshEventObject()
        })
        .catch(() => {
          console.log('Problem creating event: ' + event.title)
        })
    },
    createFreshEventObject() {
      const user = this.$store.state.user
      const id = Math.floor(Math.random() * 10000000)
      return {
        id: id,
        user: user,
        title: '',
        date: '',
        time: '',
        location: '',
        description: '',
        organizer: user,
        category: '',
        attendees: []
      }
    }
  },
  computed: {
    ...mapGetters(['getEventById']),
    ...mapState(['user', 'categories'])
  },
  // computed: - different ways of doing the above shown below
  // OPTION 1 using the store directly
  // computed: {
  //   userName() {
  //     return this.$store.state.user.name
  //   },
  //   categories() {
  //     return this.$store.state.categories
  //   }
  // }
  //
  // OPTION 2 using mapState
  // computed: mapState({
  //   userId: state => state.user.id,
  //   userName: state => state.user.name,
  //   categories: state => state.categories
  // }),
  //
  // OPTION 3 have a top level state, not use dot notation to access a property
  // computed: mapState({
  //   user: 'user',
  //   categories: 'categories'
  // }),
  //
  // OPTION 4 don't need to use the names in mapState - can transform into an array
  // computed: mapState(['user', 'categories']),
  //
  // Using SPREAD OPERATOR so mapState doesn't take up entire computed properties
  // But want to add in local computed properties
  //
  // OPTION 5 don't need to use the names in mapState - can transform into an array
  //computed: {
  //
  // Before importing of mapGetters:
  // categoriesLength() {
  //   return this.$store.getters.categoriesLength
  // },
  // getEvent() {
  //   return this.$store.getters.getEventById
  // },
  created() {
    console.log('in created of EventCreate()')
  }
}
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
