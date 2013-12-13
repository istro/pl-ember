EmberApp.LocationsRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('location');
  },
  actions: {
    // actions bubble from controller to route, so common actions can go to the route
    sayYay: function(){
      alert('yay');
    }
  }
})
