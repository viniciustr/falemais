import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Ember.RSVP.hash({
            prices: [
                {
                    origin: "011",
                    destiny: "016",
                    price: "1.90"
                }
            ],
            cities: [
                { ddd: "011", city: "São Paulo" },
                { ddd: "016", city: "Ribeirão Preto" }
            ],
            plans: [
                {
                    plan: "FaleMais 30",
                    time: "30"
                },
                {
                    plan: "FaleMais 60",
                    time: "60"
                }
            ]
        });
    }
});
