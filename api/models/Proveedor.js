/**
 * Proveedor.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

 module.exports = {

   attributes: {
     nombre:{
       type:'string',
       required: true
     },
     usuario:{
       type:'string',
       required:true
     },
     password:{
       type:'string',
       required:true
     },
     telefono:{
       type:'number',
       required:true
     },
     productos:{
       collection:'producto',
       via:'proveedor'
     },
     pedidos:{
       collection:'pedido',
       via:'proveedor'
     }


     //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
     //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
     //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


     //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
     //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
     //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


     //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
     //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
     //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

   },

 };
