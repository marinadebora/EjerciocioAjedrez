# Elercicio pintar tablero de ajedrez


### Consigna:

```
 Un niño está jugando a colorear su tablero de ajedrez y va a pintar cada casilla toda de azul o toda de rojo.
 Para darle un toque personalizado, quiere pintar la misma cantidad de casillas rojas que de azules,
  pero no quiere que le queden dos columnas con la misma cantidad de casillas rojas pintadas,
   ni quiere que le queden dos filas con la misma cantidad de casillas rojas pintadas.
¿Puede lograr pintarlo cumpliendo esas condiciones?
¿Y si en vez de un tablero de ajedrez normal de 8x8 fuese un tablero de ajedrez gigante de 1000x1000?
Es importante incluir y detallar el razonamiento y/o programa usado para determinar la respuesta.
```
## Lenguajes herramientas y framework:

* Proyecto inicializado con Vite
*  Html
*  Css
*  JavaScript
*  Reactjs
*  Cloudinary

### Resolucion

```
        Después de intentar por varias horas resolví, que es matemáticamente imposible dividir en tantas columnas y filas necesarias para ocupar el total del tablero  sin repetir ninguna fila o columna con la misma cantidad. Si vemos el ejemplo del tablero de ajedrez, nos encontramos con un total de 64 casillas por lo que solo contamos con 32 para pintar de cada color. Se necesitaría el total de la suma de 8 números distintos entre 1 y 8 para cumplir con el objetivo de no repetir filas o columnas con la misma cantidad de casillas de un solo color lo que daría en la suma total de 36, superando el 50% disponible.

```