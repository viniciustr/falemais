import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
    host: "http://private-fe2a-scuptel.apiary-mock.com",
    buildURL(modelName, id, snapshot, requestType, query) {
        return this.get("host") + "/ddd/pricing";
    }
});
