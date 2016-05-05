import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            prices: this.store.findAll("price"),
            cities: this.store.findAll("city"),
            plans: this.store.findAll("plan")
        });
    }
});
