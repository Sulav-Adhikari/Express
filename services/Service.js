import * as Model from '../models/Model.js';

export const addIntern = async (internData) => {
  return await Model.addIntern(internData);
};

export const getInterns = async () => {
  return await Model.getInterns();
};

export const updateIntern = async (id, internData) => {
  return await Model.updateIntern(id, internData);
};

export const deleteIntern = async (id) => {
  return await Model.deleteIntern(id);
};