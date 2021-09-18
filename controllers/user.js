const { response } = require('express')

const usuariosGet = (req, res = response) => {
    const { nombre = 'No name', edad } = req.query;
    res.json({
        // ok: true,
        msg: 'Get Correcto desde el controlador',
        nombre,
        edad
    });

};

const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        // ok: true,
        msg: 'Post Correcto desde el controlador',
        nombre,
        edad
    });

};

const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        // ok: true,
        msg: 'Put Correcto desde el controlador',
        id
    });

};

const usuariosDelete = (req, res = response) => {

    res.json({
        // ok: true,
        msg: 'Delete Correcto desde el controlador'
    });

};
const usuariosPatch = (req, res = response) => {

    res.json({
        // ok: true,
        msg: 'Patch Correcto desde el controlador'
    });

};

module.exports = {
    usuariosGet,
    usuariosPatch,
    usuariosDelete,
    usuariosPost,
    usuariosPut
}