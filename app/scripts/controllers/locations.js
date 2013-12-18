EmberApp.LocationsIndexController = Ember.ArrayController.extend({
  actions: {
    // controller can have some custom actions as well
    controllerAction: function(){
      console.log('custom action in controller! yay!');
    }
  }
});

EmberApp.LocationsEditController = Ember.ObjectController.extend({
  actions: {
    save: function(){
      var ctrl = this,
          record = this.get('model');
      record.save().then( function(record){
        ctrl.transitionToRoute('locations.show', record);
      });
    }
  }
});

EmberApp.LocationsNewController = Ember.ObjectController.extend({
  actions: {
    save: function(){
      var ctrl = this,
          record = this.get('model');
      console.log(record.get('name'));
      record.save().then( function(record){
        ctrl.transitionToRoute('locations.show', record);
      });
    }
  }
})
