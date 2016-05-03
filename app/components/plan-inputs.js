import Ember from 'ember';

export default Ember.Component.extend({
    init() {
        this._super();
        this.totalMinutos = 0;
        this.dddOrigem = "";
        this.dddDestino = "";
    },
    actions: {}
});
