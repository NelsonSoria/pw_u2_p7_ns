console.log(Vue);

const app = Vue.createApp({
    /* template:`
    <h1>Hola mundo </h1>
    <p> Con Vue.JS </p>
    <p>{{1+2}}</p>
    <p>{{[1,2,3,4,5,6,7,8,9]}}</p>
    <p>{{ {nombre:"Nelson",apellido:"Soria"} }}</p>
    <p>{{false ? 'Activo' : 'Inactivo'}}</p>
     <p>{{1===1}}</p>
    ` */
    //Options API
    methods: {
        cambiarMensaje(){
            this.mensaje='Nuevo Mensaje method';
            this.edad=30;
        }

    },
    //PROPIEDADES REACTIVAS
    //declarcion de propiedades reactivad dentro de data
    //Estas propiedades son el nexo de comunacion entre pagina html y el codigo JS 
    data() {
        return {
            mensaje:'Hola Mundo Pweb',
            edad:35
        }
    }
});

/* backticks ``*/
app.mount('#myApp')