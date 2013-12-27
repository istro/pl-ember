EmberApp.LocationEditController = Ember.ObjectController.extend({
  actions: {
    save: function(){
      var ctrl = this,
          record = this.get('model');
      // todo: handle errors if save fails?
      record.save().then( function(record){
        ctrl.transitionToRoute('location.index');
      });
    }
  }
});

EmberApp.LocationsNewController = Ember.ObjectController.extend({
  actions: {
    save: function(){
      var ctrl = this,
          record = this.get('model');
      record.save().then( function(record){
        ctrl.transitionToRoute('locations');
      });
    }
  }
})
