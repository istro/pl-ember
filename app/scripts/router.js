// EmberApp.Router = Ember.Router.extend({
//   location: 'history'
// });

EmberApp.Router.map(function() {
  this.resource('locations', function(){
    this.route('new');
  });

  this.resource('location', { path: 'locations/:location_id' }, function(){
    this.route('edit');
    this.resource('rooms', function(){
      this.route('show', { path: '/:room_id'})
    });
  });
});
