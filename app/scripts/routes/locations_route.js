EmberApp.LocationsRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('location');
  }
})
