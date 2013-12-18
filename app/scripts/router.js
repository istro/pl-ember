// EmberApp.Router = Ember.Router.extend({
//   location: 'history'
// });

EmberApp.Router.map(function() {
  this.resource('locations', function(){
    this.route('new');
    this.route('show', { path: '/:location_id' });
    this.route('edit', { path: '/:location_id/edit' });
  });
});

EmberApp.LocationsRoute = Ember.Route.extend({
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

// locations.index
EmberApp.LocationsIndexRoute = Ember.Route.extend({
  setupController: function(controller){
    controller.set('locations', this.store.findAll('location'));
  },
})

// locations.new
EmberApp.LocationsNewRoute = Ember.Route.extend({
  setupController: function(controller){
    // todo: user_id should be retreived from rails
    var newLocation = this.store.createRecord('location', {
      user_id: 1
    });
    controller.set('model', newLocation);
  }
})
