module.exports = function(app) {
  app.dataSources.nasty_db.automigrate('Rol', function(err) {
    if (err) throw err;

    app.models. Rol.create([
      {rol_id: 0, rol_nombre: 'SATAN MASTER'}
    ], function(err, models) {
      if (err) throw err;

      console.log('Models created: \n', models);
    });
  });
};