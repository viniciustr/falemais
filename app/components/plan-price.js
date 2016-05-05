import Ember from 'ember';

export default Ember.Component.extend({
    name: "",
    totalTime: "",
    factor: "",
    dddOrigem: "",
    dddDestino: "",
    minutos: "",
    precoFinal: Ember.computed("prices", "totalTime", "factor", "dddOrigem", "dddDestino", "minutos", function() {
        if (this.get("minutos") == "" || isNaN(this.get("minutos"))) {
            return "";
        }
        var priceList = this.get("prices").toArray();
        var totalPrices = priceList.length;
        for (var i = 0; i < totalPrices; i++) {
            if (priceList[i].get("origin") == Number(this.get("dddOrigem")) && priceList[i].get("destiny") == Number(this.get("dddDestino"))) {
                var excd = this.get("minutos") - this.get("totalTime");
                if (excd > 0) {
                    return priceList[i].get("price") * this.get("factor") * excd + "";
                }
                return "0";
            }
        }
        return "";
    }),
    precoInteiro: Ember.computed("precoFinal", function() {
        var preco = this.get("precoFinal");
        var pos = preco.indexOf(".");
        if (pos > -1) {
            return preco.substring(0, pos);
        }
        return preco;
    }),
    precoCentavos: Ember.computed("precoFinal", function() {
        var preco = this.get("precoFinal");
        var pos = preco.indexOf(".");
        if (pos > -1) {
            return (preco.substring(pos+1, preco.length) + "000").substring(0, 2) ;
        }
        return "00";
    })
});
