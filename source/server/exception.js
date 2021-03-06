Space.domain.Event.extend('Space.domain.Exception', {

  fields() {
    return _.extend(Space.domain.Event.prototype.fields.call(this), {
      thrower: String, // Path to aggregate or process that threw the error
      error: Space.Error
    });
  }

});
