const getConnection = require('../../../interface/DBconn.js');

// User model
class User {
  constructor(nombre, apellido, email, contrasena, documento, rol, estado) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.contrasena = contrasena;
    this.documento = documento;
    this.rol = rol;
    this.estado = estado;
  }

  async createUser() {
    const connection = await getConnection();
    try {
      // Ejecuta la consulta de inserción

      // id	nombre	apellido	email	contrasena	documento	rol	estado
      const [result] = await connection.query(`
        INSERT INTO users (nombre,	apellido,	email,	contrasena,	documento,	rol,	estado)
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `, [this.nombre, this.apellido, this.email, this.contrasena, this.documento, this.rol, this.estado]);
      // Obtén el ID del último registro insertado
      const userId = result.insertId;

      return { id: userId }; // Devuelve el ID del nuevo usuario
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al insertar el usuario'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }

  async viewUsers() {
    const connection = await getConnection();
    try {
      // Ejecuta la consulta de selección
      const [result] = await connection.query(`
        SELECT *
        FROM users
      `);
      return result; // Devuelve el resultado de la consulta
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al obtener los usuarios'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }

  async updateUser(userId) {
    const connection = await getConnection();

    try {
      // Ejecuta la consulta de actualización
      await connection.query(`
        UPDATE users
        SET nombre = ?,
        apellido = ?,
        email	 = ?,
        contrasena = ?,
        documento = ?
        WHERE id = ?
      `, [this.nombre, this.apellido, this.email, this.contrasena, this.documento, userId]);

      return { id: userId }; // Devuelve el ID del usuario actualizado
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al actualizar el usuario'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }

  async findUser() {

    const connection = await getConnection();

    try {
      // Ejecuta la consulta de selección
      const [result] = await connection.query(`
          SELECT 
          id, 
          nombre as nombre, 
          apellido as apellido, 
          email as email, 
          contrasena as contrasena, 
          documento as documento, 
          rol as rol 
          FROM users 
          WHERE email = ?
          AND contrasena = ?;`
        , [this.email, this.contrasena]);

      return result; // Devuelve el resultado de la consulta
    }
    catch (error) {
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al obtener el usuario'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }

  }

  async deleteUser(userId) {
    const connection = await getConnection();
    try {
      // Ejecuta la consulta de eliminación
      await connection.query(`
        DELETE FROM users
        WHERE id = ?
      `, [userId]);
      return { id: userId }; // Devuelve el ID del usuario eliminado
    } catch (error) {
      console.log(error);
      throw {
        ok: false,
        statusCode: 500,
        data: 'Ocurrió un error al eliminar el usuario'
      };
    } finally {
      connection.release(); // Libera la conexión de vuelta al pool
    }
  }
}
module.exports = User;