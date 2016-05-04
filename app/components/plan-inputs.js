import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
    totalMinutos: {
        description: "Minutos",
        debounce: 500,
        validators: [
            validator("number", {
                allowString: true,
                allowBlank: true,
                integer: true,
                positive: true,
                lte: 2000,
                message: "Digite o total de minutos."
            })
        ]
    }
});

export default Ember.Component.extend(Validations, {
    actions: {
        totalMinutos: 0,
        dddOrigem: "",
        dddDestino: "",
        originChanged(ddd) {
            this.set("dddOrigem", ddd);
        },
        destinationChanged(ddd) {
            this.set("dddDestino", ddd);
        }
    }
});
