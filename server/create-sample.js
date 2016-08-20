module.exports = function(app) {
  app.dataSources.nasty_db.automigrate('Rol', function(err) {
    if (err) throw err;

    app.models.Rol.create([
    ], function(err, models) {
      if (err) throw err;

      console.log('Models created: \n', models);
    });
  });

  app.dataSources.nasty_db.automigrate('Usuario', function(err) {
    if (err) throw err;

    app.models.Usuario.create([
    ], function(err, models) {
      if (err) throw err;

      console.log('Models created: \n', models);
    });
  });

  app.dataSources.nasty_db.automigrate('Grupo', function(err) {
    if (err) throw err;

    app.models.Grupo.create([
    ], function(err, models) {
      if (err) throw err;

      console.log('Models created: \n', models);
    });
  });

  app.dataSources.nasty_db.automigrate('Evaluacion', function(err) {
    if (err) throw err;

    app.models.Evaluacion.create([
    ], function(err, models) {
      if (err) throw err;

      console.log('Models created: \n', models);
    });
  });

  app.dataSources.nasty_db.automigrate('Actividad', function(err) {
    if (err) throw err;

    app.models.Actividad.create([
    ], function(err, models) {
      if (err) throw err;

      console.log('Models created: \n', models);
    });
  });
};