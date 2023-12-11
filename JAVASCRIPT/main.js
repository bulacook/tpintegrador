const { createApp } = Vue


createApp({
    data() {
        return {

            productos:[],
        url:'https://diegolbulacio.pythonanywhere.com/productos',
        plato:"",
        descripcion:"",
        //stock:0,
        foto:"",
        error: false,
        cargando: true
 
                                   
        }
    },
    methods:{
        fetchdata (url){
            fetch(url)
            .then(response => response.json())
            .then(data => {
                
                console.log(data);
                this.productos= data
            }
)}

        },
        created(){
            this.fetchdata(this.url)
        }



    
}).mount('#app')
