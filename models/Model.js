import knex from 'knex';
import { development } from '../knexfile.js';


const db = knex(development); 

export const addIntern = async ({ name, address, dob, selectionStatus }) => {
  return await db('intern').insert({ name, address, dob, selection: selectionStatus });
};

export const getInterns = async () => {
  return await db('intern').select('*');
};

export const updateIntern = async (id, { name, address, dob, selectionStatus }) => {
  return await db('intern').where({ id }).update({ name, address, dob, selection: selectionStatus });
};

export const deleteIntern = async (id) => {
  return await db('intern').where({ id }).del();
};