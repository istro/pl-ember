EmberApp.LocationView = Ember.View.extend({
  didInsertElement: function(){
    // document.ready handlers could go in here
    $('#click').click(function(){
      console.log('clicked!');
      $('#boom').show();
    })
  }
})
