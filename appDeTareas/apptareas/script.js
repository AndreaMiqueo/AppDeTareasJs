// info fecha
let numero = document.getElementById("dateNumber");
let mes = document.getElementById("dateMonth");
let año = document.getElementById("dateYear");
let dia = document.getElementById("dateText");

// contenedor de tareas
let tareaContenedor = document.getElementById("tareaContenedor");

const setDate =() =>{
    const date = new Date();
    numero.textContent = date.toLocaleString('es', {day:'numeric'});
    dia.textContent= date.toLocaleString('es', {weekday:"long"});
    mes.textContent = date.toLocaleString('es', {month:"short"});
    año.textContent = date.toLocaleString('es', {year:"numeric" });
};



const addNuevaTarea = event => {
    event.preventDefault(); //evita que form haga un submit y nos lleve a otra pagina
    const { value } = event.target.taskText; //obtengo el valor del input
    if(!value) return ; //Verifico que no se envien tareas vacias 
    const task = document.createElement('div'); // creo un elemeto de tipo div que se guarda en la variable task
    task.classList.add('task', 'roundBorder'); //agrego 2 class a task
    task.addEventListener('click',changeTaskState); //agrego un evento a task cada vez que se haga click llama a la funcion para cambiar el estado de la task
    task.textContent = value; //agrego el texto obtenido del input al task
    tareaContenedor.prepend(task); // se agrega la tarea al contenedor de la lista de tareas. Se usa prepend para agragar al principio de la lista
    event.target.reset(); // limpia el input para que el usuario pueda agregar una nueva tarea.   
} 

const changeTaskState = event =>{ // cuando se hace click recibimos el evento de la tarea
    event.target.classList.toggle('done'); //accedo a la lista clases de la tarea y con toggle agrego la clase done si no la tiene y si la tiene la elimino
}

//funcion para ordenar las tareas
const order = () =>{
    const done = []; //array de tareas hechas
    const toDo =[]; // tareas por hacer
    
    //accedo cada uno de los hijos de contenedor de tarea
    tareaContenedor.childNodes.forEach( el => {
        el.classList.contains('done') ? done.push(el): toDo.push(el) // recorro el contenedor de tarea y pregunto si tiene la clase done agrego el elemento al array de done y si no lo llevo al array de toDo
    })
    return [...toDo, ...done]; // retorno un nuevo array con las tareas por hacer arriba y las tareas hechas abajo
}

//funcion que llama a la funcion order y agrega las tareas al contenedor de tareas
const reOrdenarTareas = () => {
    order().forEach(el=> tareaContenedor.appendChild(el) )
}

setDate();