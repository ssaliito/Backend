const getConnection = require('../../../interface/DBconn.js');

// Materia model
class Materia {
    constructor(nombre, horas, docente, dia) {
        this.nombre = nombre;
        this.horas = horas;
        this.docente = docente;
        this.dia = dia;
  }

  async createMateria() {
    const connection = await getConnection();
    try {
      // Ejecuta la consulta de inserción

      // id nombre horas docente dia
      const [result] = await connection.query(`
        INSERT INTO materias (nombre, horas, docente, dia)
        VALUES (?, ?, ?, ?)
      `, [this.nombre, this.horas, this.docente, this.dia]);
      // Obtén el ID del último registro insertado
      const materiasId = result.insertId;

      return { id: materiasId }; // Devuelve el ID de la nueva finanza
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al insertar las finanzas'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }

  async viewMateria() {
    const connection = await getConnection();
    try {
      // Ejecuta la consulta de selección
      const [result] = await connection.query(`
        SELECT *
        FROM materias
      `);
      return result; // Devuelve el resultado de la consulta
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al obtener las materias'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }

  async updateMateria(materiasId) {
    const connection = await getConnection();
    try {
      // Ejecuta la consulta de actualización
      await connection.query(`
        UPDATE materias
        SET nombre = ?,
        horas = ?,
        docente = ?,
        dia = ?
        WHERE id = ?
      `, [this.nombre, this.horas, this.docente, this.dia, materiasId]);
      return { id: materiasId }; // Devuelve el ID del usuario actualizado
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al actualizar las materias'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }

  async deleteMateria(materiasId) {
    const connection = await getConnection();
    try {
      // Ejecuta la consulta de eliminación
      await connection.query(`
        DELETE FROM materias
        WHERE id = ?
      `, [materiasId]);
      return { id: materiasId }; // Devuelve el ID de la financia eliminada
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al eliminar la materia'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }
}
module.exports = Materia;