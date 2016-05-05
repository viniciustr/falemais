import JSONAPISerializer from 'ember-data/serializers/json-api';

export default JSONAPISerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        var total = payload.total;
        for (var i = 0; i < total; i++) {
            payload.data[i].id = String(i+1);
            payload.data[i].type = "city";
            payload.data[i].attributes = {};
            payload.data[i].attributes.ddd = payload.data[i].ddd;
            payload.data[i].attributes.city = payload.data[i].city;
            
            delete payload.data[i].ddd;
            delete payload.data[i].city;
        }
        
        delete payload.total;
        return this._super(store, primaryModelClass, payload, id, requestType);
    }
});
