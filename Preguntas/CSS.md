CSS

1. ¿Cómo centramos el siguiente elemento? <div></div>
   display: flex; justify-content: center; align-items: center;

2. ¿Cuál es la diferencia entre “position: relative” y “position: absolute”?
   Absolute es para asignar la posición con respecto a la original por ejemplo la pantalla completa, y relative es con respecto a la posición dentro de la cual se encuentra, por ejemplo si cree una sidebar y centro horizontalmente un "soy una sidebar" con relative quedaría centrada respecto a la sidebar y con absolute quedaría en el centro de la pantalla

3. ¿Cuál es la diferencia entre “position: fixed” y “position: sticky”?
   fixed posiciona el elemento en relación a la ventana del navegador, lo que significa que permanece en su lugar aún cuando se desplaza la página, por otro lado sticky hace que el elemento se comporte como relative hasta que se alcance un desplazamiento específico, se comporta como fixed.

4. ¿Cómo centramos en el medio de la pantalla un elemento “div”? <div><div>
   puedes usar position: absolute junto con top: 50%, left: 50%, y luego aplicar transform: translate(-50%, -50%); para ajustar su posición.

5. ¿Cómo subrayar el siguiente texto “Caminos del Sol”?
   <span style="text-decoration: underline;">Caminos del Sol</span>

6. ¿Cómo agregarías un título?
    usando un h1 en HTML