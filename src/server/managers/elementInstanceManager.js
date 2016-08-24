/**
 * @file elementInstanceManager.js
 * @author Zishan Iqbal
 * @description This file includes the CURD operations for the elementInstance Model.
 */

import BaseManager from './../managers/baseManager';
import ElementInstance from './../models/elementInstance';
import DataTracks from './../models/dataTracks';
import sequelize from './../utils/sequelize';

class ElementInstanceManager extends BaseManager {
	/**
	 * @desc - updates the elementInstance which has the coresponding uuid
	 * @param Integer, JSON object - uuid, data
	 * @return Integer - returns the number of rows updated
	 */
	updateByUUID(uuid, data) {
			return ElementInstance.update(data, {
				where: {
					uuid: uuid
				}
			});
		}
	/**
	 * @desc - uses a raw-query to join element_instance and data_tracks 
	 * @param Integer - instanceId
	 * @return JSON - returns a Array of JSON objects with elementInstance and its related dataTracks
	 */
	findByInstanceId(instanceId) {
		var instanceConfigQuery = "SELECT i.*, t.is_activated FROM element_instance i LEFT JOIN data_tracks t ON (i.track_id = t.ID) WHERE i.iofabric_id = " + instanceId + " AND (i.track_id = 0 OR t.is_activated = 1)";
		return sequelize.query(instanceConfigQuery);
	}
}

const instance = new ElementInstanceManager();
export default instance;