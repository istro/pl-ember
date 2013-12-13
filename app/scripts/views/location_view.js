EmberApp.LocationView = Ember.View.extend({
  didInsertElement: function(){
    console.log('document.ready handlers could go in here');
    $('#click').click(function(){
      $('#boom').show();
    })
  }
})
