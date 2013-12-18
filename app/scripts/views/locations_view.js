EmberApp.LocationsView = Ember.View.extend({
  didInsertElement: function(){
    // document.ready handlers could go in here
    $('#click').click(function(){
      $('#boom').show();
    })
  }
})
