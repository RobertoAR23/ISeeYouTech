REACT

1. ¿Qué es un componente?
   Es una pieza reutilizable de la interfaz en React, realizada mediante JSX, un ejemplo podría ser un date range picker

2. ¿Cuál es el ciclo de vida de un componente?
   Es el proceso por el que pasa un componente: montaje (cuando se crea), actualización (cuando cambia) y desmontaje (cuando se elimina).

3. Como renderizar elementos en react?
   Usando la función render() y JSX para escribir HTML dentro de JavaScript un ejemplo breve que probé
   import React from 'react';
   import ReactDOM from 'react-dom/client';

const elemento = <h1>Hello World!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(elemento);

4. ¿Cual es la diferencia entre props y state?
   Props: Datos que vienen de un componente padre.
   State: Datos internos del componente que pueden cambiar con el tiempo.

5. ¿Qué propiedad de React se utiliza para agregar estilo?
   "style"
6. Menciona algunos métodos del ciclo de vida de los componentes de React
   componentDidMount, componentDidUpdate, componentWillUnmount

7. Escribe en JS o pseudocódigo un ejemplo de renderizado condicional con un componente
   imaginario <Card> que se encuentra en la siguiente clase

const Card = () => {
  const showCard = true; 
  return (
    <div>
      {showCard ? (
        <Card title="Card" content="Contenido de la card." />
      ) : (
        <p>No se muestra la Card.</p>
      )}
    </div>
  );
};

const Card = ({ title, content }) => (
  <div>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);
