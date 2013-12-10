EmberApp.Location = DS.Model.extend({
  name: DS.attr(),
  url: function(){
    return 'locations/' + this.get('id');
  }.property('id')
})
