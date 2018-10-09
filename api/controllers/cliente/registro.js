module.exports = {
  friendlyName: 'Registro',
  description: 'Registro cliente.',
  inputs: {
    cliente:{
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
    if(await Cliente.count({usuario:inputs.cliente.usuario})>=1){
      return exits.success({result:false, err:'Ya está registrado.'});
    }
    let cliente = await Cliente.create(inputs.cliente).fetch();
    return exits.success({result:true, registro:cliente});

  }


};
