import Ember from 'ember';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
    selectedDDD: {
        description: "DDD",
        debounce: 500,
        validators: [
            validator("format", {
                allowBlank: true,
                regex: /^0?[1-9]{2}$/,
                message: "Digite o DDD."
            })
        ]
    }
});

export default Ember.Component.extend(Validations, {
    modalToggle: false,
    selectedDDD: "",
    actions: {
        openModal() {
            this.set("modalToggle", true);
        },
        selectDDD(ddd) {
            this.set("selectedDDD", ddd);
            this.set("modalToggle", false);
            this.get('onSelection')(this.selectedDDD);
        }
    }
});
