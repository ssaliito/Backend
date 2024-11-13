const ResponseBody = require('../../../shared/model/ResponseBody.model');
const { createMateria, viewMateria, updateMateria, deleteMateria } = require('../controller/materias.controller');

const createMateriaAPI = async (req, res) => {
  let { nombre, horas, docente, dia } = req.body;
  let message;

  try {
    let response = await createMateria({ nombre, horas, docente, dia });
    message = new ResponseBody(true, 200, response);
  } catch (error) {
    if (error.statusCode) {
      message = new ResponseBody(error.ok, error.statusCode, error.data);
    } else {
      console.log(error);
      message = new ResponseBody(false, 500, 'Ocurrió un error al procesar la solicitud.');
    }
  }

  return res.json(message);
  
}

const viewMateriaAPI = async (req, res) => {
  let message;

  try {
    let response = await viewMateria();
    message = new ResponseBody(true, 200, response);
  } catch (error) {
    if (error.statusCode) {
      message = new ResponseBody(error.ok, error.statusCode, error.data);
    } else {
      console.log(error);
      message = new ResponseBody(false, 500, 'Ocurrió un error al procesar la solicitud.');
    }
  }

  return res.json(message);
}

const updateMateriaAPI = async (req, res) => {
  let {nombre, horas, docente, dia, id} = req.body;
  let message;

  if (!id) {
    return res.json(new ResponseBody(false, 400, 'El ID de la materia es requerido.'));
  }

  try {
    let response = await updateMateria({ nombre, horas, docente, dia, id });
    message = new ResponseBody(true, 200, response);
  } catch (error) {
    if (error.statusCode) {
      message = new ResponseBody(error.ok, error.statusCode, error.data);
    } else {
      console.log(error);
      message = new ResponseBody(false, 500, 'Ocurrió un error al procesar la solicitud.');
    }
  }

  return res.json(message);
}

const deleteMateriaAPI = async (req, res) => {
  let { id } = req.body;
  let message;

  if (!id) {
    return res.json(new ResponseBody(false, 400, 'El ID de la materia es requerido.'));
  }

  try {
    let response = await deleteMateria({ id });
    message = new ResponseBody(true, 200, response);
  } catch (error) {
    if (error.statusCode) {
      message = new ResponseBody(error.ok, error.statusCode, error.data);
    } else {
      console.log(error);
      message = new ResponseBody(false, 500, 'Ocurrió un error al procesar la solicitud.');
    }
  }

  return res.json(message);
}


module.exports = {
  createMateriaAPI,
  viewMateriaAPI,
  updateMateriaAPI,
  deleteMateriaAPI,
};