import JSONAPISerializer from 'ember-data/serializers/json-api';

export default JSONAPISerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        var total = payload.total;
        for (var i = 0; i < total; i++) {
            payload.data[i].id = String(i+1);
            payload.data[i].type = "price";
            payload.data[i].attributes = {};
            payload.data[i].attributes.origin = payload.data[i].origin;
            payload.data[i].attributes.destiny = payload.data[i].destiny;
            payload.data[i].attributes.price = payload.data[i].price;
            
            delete payload.data[i].origin;
            delete payload.data[i].destiny;
            delete payload.data[i].price;
        }
        
        delete payload.total;
        return this._super(store, primaryModelClass, payload, id, requestType);
    }
});
