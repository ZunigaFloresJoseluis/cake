module.exports = {
  friendlyName: 'Registro',
  description: 'Registro Provedor.',
  inputs: {
    proveedor:{
      type:'json',
      required:true
    }
  },
  exits: {
    success:{
      statusCode: 200,
      description:'El usuario inició sesion correctamente, se retorna el usuario sin password.'
    },
    error:{
      statusCode: 404,
      description: 'Error usuario o contraseña'
    }

  },
  fn: async function (inputs, exits) {
    if(await Proveedor.count({usuario:inputs.proveedor.usuario})>=1){
      return exits.success({result:false, err:'Ya está registrado.'});
    }
    let proveedor = await Proveedor.create(inputs.proveedor).fetch();
    return exits.success({result:true, registro:proveedor});

  }

};
