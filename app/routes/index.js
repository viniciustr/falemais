import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            prices: this.store.findAll("price"),
        //     prices: [{
        //     "origin": "011",
        //     "destiny": "016",
        //     "price": "1.90"
        // },
        // {
        //     "origin": "016",
        //     "destiny": "011",
        //     "price": "2.90"
        // },
        // {
        //     "origin": "011",
        //     "destiny": "017",
        //     "price": "1.70"
        // },
        // {
        //     "origin": "017",
        //     "destiny": "011",
        //     "price": "2.70"
        // },
        // {
        //     "origin": "011",
        //     "destiny": "018",
        //     "price": "0.90"
        // },
        // {
        //     "origin": "018",
        //     "destiny": "011",
        //     "price": "1.90"
        // }],
            cities: this.store.findAll("city"),
            plans: this.store.findAll("plan")
        });
    }
});
