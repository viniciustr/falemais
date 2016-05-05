# FaleMais

Este projeto é uma prova de conceito de uma aplicação web front-end para exposição dos planos FaleMais da ScupTel.

Trata-se de uma aplicação Ember.js com layout feito com Twitter Bootstrap.

## Pré-requisitos

Você vai precisar ter os seguintes programas instalados em sua máquina antes de começar:

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (com NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Instalação

* Descompacte o conteúdo do arquivo .ZIP em um novo diretório
* Mude para o novo diretório
* `npm install` (linha de comando)
* `bower install` (linha de comando)

## Execução / Desenvolvimento

* `ember server` (via linha de comando dentro da pasta do projeto)
* Abra a aplicação em [http://localhost:4200](http://localhost:4200).

### Geradores de código

Durante o desenvolvimento do projeto, foram utilizados muitos geradores automáticos de código "boilerplate" para acelerar o desenvolvimento.

Exemplos:
* `ember generate component city-selector`: para criar os arquivos do componente de seleção de cidades.
* `ember generate serializer plan`: para criar o serializador que normaliza o conteúdo da API fornecida para o padrão JSONAPI.

### Add-ons

Neste projeto, foram utilizados alguns add-ons bastante utilizados pela comunidade Ember.js para agilizar o desenvolvimento.

* [`ember-bootstrap`](http://kaliber5.github.io/ember-bootstrap/): Componentes ember.js que encapsulam muitos componentes do framework CSS Bootstrap.
* [`ember-cp-validations`](http://offirgolan.github.io/ember-cp-validations/): Add-on para criar validadores de dados.

### Execução de testes

Ainda não foram escritos os testes da aplicação.

* `ember test` (via linha de comando dentro da pasta do projeto)
* `ember test --server` (via linha de comando dentro da pasta do projeto)

### Build da aplicação para deploy

* `ember build` (development)
* `ember build --environment production` (production)

## Links úteis

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

