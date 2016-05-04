import JSONAPISerializer from 'ember-data/serializers/json-api';

export default JSONAPISerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        var total = payload.total;
        for (var i = 0; i < total; i++) {
            payload.data[i].id = String(i+1);
            payload.data[i].type = "plan";
            payload.data[i].attributes = {};
            payload.data[i].attributes.plan = payload.data[i].plan;
            payload.data[i].attributes.time = payload.data[i].time;
            
            delete payload.data[i].plan;
            delete payload.data[i].time;
        }
        
        delete payload.total;
        return this._super(store, primaryModelClass, payload, id, requestType);
    }
});
