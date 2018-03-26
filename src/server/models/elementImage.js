/**
 * @file ioElementImage.js
 * @author Zishan Iqbal
 * @description This file includes a IOElementImage model used by sequalize for ORM;
 */

import Sequelize from 'sequelize';
import sequelize from './../utils/sequelize';
import Element from './element';
import FogType from './fogType';

const ElementImage = sequelize.define('element_images', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'ID'
  },
  containerImage: {
    type: Sequelize.TEXT,
    field:'container_image'
  }
}, {
  // don't add the timestamp attributes (updatedAt, createdAt)
  timestamps: false,
  // disable the modification of table names
  freezeTableName: true,
  // don't use camelcase for automatically added attributes but underscore style
  // so updatedAt will be updated_at
  underscored: true
});

ElementImage.belongsTo(Element, {
    foreignKey: 'element_id'
});
ElementImage.belongsTo(FogType, {
  foreignKey: 'iofog_type_id'
});

export default ElementImage;