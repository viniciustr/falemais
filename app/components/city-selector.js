import Ember from 'ember';

export default Ember.Component.extend({
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
