EmberApp.LocationsRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('location');
  },
  actions: {
    // actions bubble from controller to route, so common actions can go to the route
    deleteRecord: function(model) {
      if(confirm('is there no flicker of doubt in your mind that you want to proceed with this destructive action?')){
        model.deleteRecord();
        model.save();
      }
    }
  }
})

// locations/new
EmberApp.LocationsNewRoute = Ember.Route.extend({
  setupController: function(controller){
    // todo: user_id should be retreived from rails
    var newLocation = this.store.createRecord('location', {
      user_id: 1
    });
    controller.set('model', newLocation);
  }
})

// Individual location routes
EmberApp.LocationEditRoute = Ember.Route.extend({
  model: function(params) {
    return this.modelFor('location');
  }
})
