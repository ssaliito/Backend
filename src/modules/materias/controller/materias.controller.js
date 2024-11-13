const Materia = require('../models/Materia.model');
async function createMateria(options) {
  const materia = new Materia(
    options.nombre,
    options.horas,
    options.docente,
    options.dia
  );

  let materiaResult;
  
  try {
    materiaResult = await materia.createMateria();
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al crear la materia'
    };
  }

  return {
    message: 'Materia creada exitosamente'
  };
}

async function viewMateria() {
  const materia = new Materia();
  let materiaResult;

  try {
    materiaResult = await materia.viewMateria();
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al obtener las materias'
    };
  }

  return materiaResult;
}

async function updateMateria(options) {
  const materia = new Materia(
    options.nombre,
    options.horas,
    options.docente,
    options.dia
  );

  try {
    materiaResult = await materia.updateMateria(options.id);
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al actualizar la materia',
    };
  }

  return {
    message: 'Materia actualizada exitosamente',
  };
}

async function deleteMateria(options) {
  const materia = new Materia();

  try {
    materiaResult = await materia.deleteMateria(options.id);
  } catch (error) {
    if (error.statusCode) throw error;
    console.log(error);
    throw {
      ok: false,
      statusCode: 500,
      data: 'Ocurrió un error al eliminar la financia'
    };
  }

  return {
    message: 'Materia eliminada exitosamente',
  };
}

module.exports = {
  createMateria,
  viewMateria,
  updateMateria,
  deleteMateria
};