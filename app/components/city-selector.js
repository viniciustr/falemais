import Ember from 'ember';

export default Ember.Component.extend({
    modalToggle: false,
    actions: {
        openModal() {
            console.log("called");
            this.set("modalToggle", true);
        }
    }
});
