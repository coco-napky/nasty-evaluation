module.exports = function(app) {
  app.dataSources.nasty_db.automigrate('Actividad', function(err) {
    if (err) throw err;

    app.models. Actividad.create([
      {actividad_id: 0, actividad_nombre: 'SATANIZAR'}
    ], function(err, models) {
      if (err) throw err;

      console.log('Models created: \n', models);
    });
  });
};