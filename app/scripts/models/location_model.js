EmberApp.Location = DS.Model.extend({
  name: DS.attr(),
  utility_identifier: DS.attr(),
  postal: DS.attr(),
  rooms: DS.attr(),
  url: function(){
    // todo - remove hash once using browser history api is set up
    return '#/locations/' + this.get('id');
  }.property('id')
})
