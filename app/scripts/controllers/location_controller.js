EmberApp.LocationController = Ember.Controller.extend({
  model: function(){
    this.store.find('location');
  },
  actions: {
    showBox: function(){
      console.log('yay to actions!');
      var box = $('#bam');
      box.show();
    }
  }
})
