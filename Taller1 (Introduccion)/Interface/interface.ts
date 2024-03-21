interface Persona{
    nombre: string,
    edad?: number,
    mayor_de_edad: boolean
}

function imprimirPersona(persona: Persona): void {
    console.log(`Nombre de la persona: ${persona.nombre}`)
    console.log(`Edad de la persona: ${persona.edad}`)
    console.log(`Mayoria de edad: ${persona.mayor_de_edad ? 'Si': 'No'}`)
}

const persona1: Persona =  {
    nombre: 'Juan',
    edad: 10,
    mayor_de_edad: true
}


imprimirPersona(persona1)