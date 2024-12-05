const frases = [{frase:'El que madruga Dios le Ayuda',autor:'Juanito P'},
    {frase:'De tal palo tal astilla',autor:'Maria Carmen'},
    {frase:'Al que madruga dios lo ayuda',autor:'Carmen Aguila'},
    {frase:'no hay mal que por bien no venga',autor:'Richard Noquez'},
    {frase:'Mas rapido cae el mentiroso que el ladron',autor:'Ariel Paredes'},
    {frase:'Lo que facil viene, facil se va',autor:'Henry Suarez'},
    {frase:'Chulla vida',autor:'El kike'},
]

const app = Vue.createApp({
    methods: {
    },
   
    data() {
        return {
          
            listafrases:frases
        }
    }
});

app.mount('#myApp')