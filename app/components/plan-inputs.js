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
                message: "Digite o total de minutos."
            })
        ]
    }
});

export default Ember.Component.extend(Validations, {
    totalMinutos: "",
    dddOrigem: "",
    dddDestino: "",
    actions: {
        originChanged(ddd) {
            this.set("dddOrigem", ddd);
        },
        destinationChanged(ddd) {
            this.set("dddDestino", ddd);
        }
    }
});
