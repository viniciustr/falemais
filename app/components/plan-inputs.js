import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        totalMinutos: "",
        dddOrigem: "",
        dddDestino: "",
        originChanged(ddd) {
            //console.log("origem " + ddd);
            this.set("dddOrigem", ddd);
        },
        destinationChanged(ddd) {
            //console.log("destino " + ddd);
            this.set("dddDestino", ddd);
        }
    }
});
