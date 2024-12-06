const frases = [{ frase: 'El que madruga Dios le Ayuda', autor: 'Juanito P' },
{ frase: 'De tal palo tal astilla', autor: 'Maria Carmen' },
{ frase: 'Al que madruga dios lo ayuda', autor: 'Carmen Aguila' },
{ frase: 'no hay mal que por bien no venga', autor: 'Richard Noquez' },
{ frase: 'Mas rapido cae el mentiroso que el ladron', autor: 'Ariel Paredes' },
{ frase: 'Lo que facil viene, facil se va', autor: 'Henry Suarez' },
{ frase: 'Chulla vida', autor: 'El kike' },
]

const app = Vue.createApp({
    methods: {
        agregarFrase() {
            console.log(this.frase);
            console.log(this.autor);

            const nuevaFrase = {
                frase: this.frase,
                autor: this.autor
            }
            this.listafrases.unshift(nuevaFrase);
        },
        agregarFraseFinal() {
            console.log(this.frase);
            console.log(this.autor);

            const nuevaFrase = {
                frase: this.frase,
                autor: this.autor
            }
            this.listafrases.push(nuevaFrase);
        },
        /* eventoKeyPress({target,charCode}) {
            if (charCode === 13) {
                console.log('Evento');
                console.log('charCode',charCode)
                console.log(target.baseURI);
                this.agregarFraseFinal();
            }

        } */
        eventoKeyPressModificador() {
            console.log('Evento Enter');
            this.agregarFraseFinal();


        }
    },

    data() {
        return {

            listafrases: frases,
            frase: null,
            //autor:'sin autor'
            autor: null
        }
    }
});

app.mount('#myApp')