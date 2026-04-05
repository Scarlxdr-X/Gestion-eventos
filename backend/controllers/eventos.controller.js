const conexion = require('../db/conexion')

const getEventos = (req, res) => {
  conexion.query('SELECT * FROM eventos', (error, resultados) => {
    if (error) return res.status(500).json({ mensaje: 'Error obteniendo eventos' })
    res.json(resultados)
  })
}

const getEventoById = (req, res) => {
  conexion.query('SELECT * FROM eventos WHERE id = ?', [req.params.id], (error, resultados) => {
    if (error) return res.status(500).json({ mensaje: 'Error obteniendo evento' })
    if (resultados.length === 0) return res.status(404).json({ mensaje: 'Evento no encontrado' })
    res.json(resultados[0])
  })
}

const createEvento = (req, res) => {
  const { nombre, descripcion, fecha, lugar, precio, stock_total } = req.body
  const sql = 'INSERT INTO eventos (nombre, descripcion, fecha, lugar, precio, stock_total, stock_disponible) VALUES (?, ?, ?, ?, ?, ?, ?)'
  conexion.query(sql, [nombre, descripcion, fecha, lugar, precio, stock_total, stock_total], (error, resultado) => {
    if (error) return res.status(500).json({ mensaje: 'Error creando evento' })
    res.status(201).json({ mensaje: 'Evento creado', id: resultado.insertId })
  })
}

const updateEvento = (req, res) => {
  const { nombre, descripcion, fecha, lugar, precio, stock_total } = req.body
  const sql = 'UPDATE eventos SET nombre=?, descripcion=?, fecha=?, lugar=?, precio=?, stock_total=? WHERE id=?'
  conexion.query(sql, [nombre, descripcion, fecha, lugar, precio, stock_total, req.params.id], (error) => {
    if (error) return res.status(500).json({ mensaje: 'Error actualizando evento' })
    res.json({ mensaje: 'Evento actualizado' })
  })
}

const deleteEvento = (req, res) => {
  conexion.query('DELETE FROM eventos WHERE id = ?', [req.params.id], (error) => {
    if (error) return res.status(500).json({ mensaje: 'Error eliminando evento' })
    res.json({ mensaje: 'Evento eliminado' })
  })
}

module.exports = { getEventos, getEventoById, createEvento, updateEvento, deleteEvento }