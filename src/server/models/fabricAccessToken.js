/**
* @file fabricAccessToken.js
* @author Zishan Iqbal
* @description This file includes a iofabric_access_tokens model used by sequalize for ORM;
*/

import Sequelize from 'sequelize';
import sequelize from './../utils/sequelize';

const FabricAccessToken = sequelize.define('iofabric_access_tokens', {
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, field: 'ID'},
  userId: {type: Sequelize.INTEGER, field: 'user_id'},
  expirationTime: {type: Sequelize.DATE, field: 'expiration_time'},
  token: {type: Sequelize.TEXT, field: 'token'}
}, {
  // don't add the timestamp attributes (updatedAt, createdAt)
  timestamps: false,
  // disable the modification of table names
  freezeTableName: true,
  // don't use camelcase for automatically added attributes but underscore style
  // so updatedAt will be updated_at
  underscored: true
});

export default FabricAccessToken;