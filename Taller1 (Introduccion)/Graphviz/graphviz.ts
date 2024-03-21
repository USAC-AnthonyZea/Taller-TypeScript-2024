interface Error_Estado{
    name: string,
    line: number,
    columna: number
}

const error: Error_Estado =  {
    name: "error: no se puede asignar string en number",
    line: 10,
    columna: 5
}

const error2: Error_Estado =  {
    name: "error: el valor no existe",
    line: 11,
    columna: 10
}

function generarCadena(errores: Error_Estado[]): string {
    let grafica = ' {\n'
    grafica += 'node [shape=plaintext]\n';
    grafica += 'tabla [label=<\n';
    grafica += '<table border="1" cellborder="1" cellspacing="0">\n';
    grafica += '<tr><td>Error</td><td>Linea</td><td>Columna</td></tr>\n';
    errores.forEach(errores => {
        grafica += `<tr><td>${errores.name}</td><td>${errores.line}</td><td>${errores.columna}</td></tr>\n`;
    })
    grafica += '</table>>\n';
    grafica += ']}\n';
    return grafica
}

const texto_grafica = generarCadena([error, error2])
console.log(texto_grafica)

