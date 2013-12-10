EmberApp = Ember.Application.create({
  // log every step
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_ACTIVE_GENERATION: true
});

EmberApp.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://localhost:3000'
});

require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');
