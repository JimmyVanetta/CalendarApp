//import Vue from 'vue'
import { seedData } from './seed.js'

export const store = {
    state: {
        seedData
    },
    // DAY //
    getActiveDay() {
        return this.state.seedData.find((day) => day.active)
    },
    setActiveDay(dayId) {
        this.state.seedData.map((dayObj) => {
            dayObj.id === dayId ? dayObj.active = true : dayObj.active = false
        })
    }, 
    // EVENT //
    submitEvent(eventDetails) {
        const activeDay = this.getActiveDay()
        activeDay.events.push({ "details": eventDetails, "edit": false })
    },
    editEvent(dayId,eventDetails) {
        this.resetEditOfAllEvents()
        const dayObj = this.state.seedData.find(day => day.id === dayId)
        const eventObj = dayObj.events.find(event => event.details === eventDetails)
        eventObj.edit = true
    },
    updateEvent(dayId, originalEventDetails, newEventDetails) {
        const dayObj = this.state.seedData.find(day => day.id === dayId)
        const eventObj = dayObj.events.find(event => event.details === originalEventDetails)
        eventObj.details = newEventDetails
        eventObj.edit = false
    },
    resetEditOfAllEvents() {
        this.state.seedData.map((dayObj) => dayObj.events.map((event) => event.edit = false))
    },
    // HELPERS //
    getEventObj(dayId, eventDetails) {
        const dayObj = this.state.seedData.find(day => day.id === dayId)
        return dayObj.events.find(event => event.details === eventDetails)
    }
}