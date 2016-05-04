import Ember from 'ember';

export default Ember.Component.extend({
    isCollapsed: true,
    actions: {
        toggleNavbar() {
            this.toggleProperty("isCollapsed");
        }
    }
});
