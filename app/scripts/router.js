// EmberApp.Router = Ember.Router.extend({
//   location: 'history'
// });

EmberApp.Router.map(function() {
  this.resource('locations');
  this.resource('location', { path: 'locations/:location_id'});
});
