# Custom Hooks para React

Esta carpeta contiene una colección de custom hooks reutilizables para proyectos en React. Cada uno de estos hooks encapsula lógica comúnmente utilizada, facilitando su integración y reutilización en diferentes aplicaciones.

## Hooks disponibles

### 1. `useCounter`
Hook para manejar contadores de forma sencilla.
- Incrementar, decrementar y resetear un valor numérico.
- Permite establecer valores iniciales personalizados.

### 2. `useFetch`
Hook para realizar peticiones HTTP de manera fácil y eficiente.
- Manejo de estados de carga, éxito y error.
- Permite realizar peticiones GET y manejar respuestas dinámicamente.

### 3. `useForm`
Hook para gestionar formularios en React.
- Manejo del estado de los inputs de manera automática.
- Facilita la validación y envío de datos.

### 4. `useTodos`
Hook para manejar la lógica de una lista de tareas (ToDo App).
- Agregar, eliminar y marcar tareas como completadas.
- Almacena el estado de la lista y permite gestionarla fácilmente.

## Uso
Cada hook está diseñado para ser importado y utilizado directamente en componentes funcionales. Puedes explorarlos y adaptarlos según las necesidades de tu proyecto.

```jsx
const { counter, increment, decrement, reset } = useCounter(10);
const { data, isLoading, error } = useFetch('https://api.example.com/data');
const { formState, handleInputChange, resetForm } = useForm(initialFormState);
const { todos, addTodo, deleteTodo, toggleTodo } = useTodos();
```

## Contribuciones
Si deseas mejorar o agregar nuevos hooks, ¡siéntete libre de contribuir! Toda mejora es bienvenida.

---
_Repositorio de estudio de React - Custom Hooks._

