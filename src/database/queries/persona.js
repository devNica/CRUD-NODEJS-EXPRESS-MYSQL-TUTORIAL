const persona = {
    listar: `SELECT * FROM persona WHERE persona.estado = 1`,

    persona: (id)=>{
        return `SELECT * FROM persona WHERE persona.idpersona=${id}`
    },

    actualizar: (data)=>{
        return `UPDATE persona SET 
        nombre='${data.nombre}',
        apellido='${data.apellido}',
        profesion='${data.profesion}',
        edad=${data.edad}
        WHERE persona.idpersona=${data.id}`
    },

    eliminar: (id)=>{
        return `UPDATE persona SET estado = 0 WHERE persona.idpersona=${id}`
    },

    agregar: (data)=>{
        return `INSERT INTO persona
        (idpersona, nombre, apellido, profesion, edad, estado) VALUES
        (NULL, '${data.nombre}', '${data.apellido}', '${data.profesion}', ${data.edad}, 1)`
    }
}

module.exports = persona;