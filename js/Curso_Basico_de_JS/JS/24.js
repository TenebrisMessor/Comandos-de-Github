//Metodos de propiedad

const reproductor = {
    reproducir : function(id){
        console.log(`Reproduciendo Cancion con el ID: ${id}`);
    },
    pausar: function(){
        console.log("Puasando...")
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la playlist: ${nombre}`)
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo la playlist: ${nombre}`)
    },
}

reproductor.brorrarCancion=function(id){
    console.log(`Eliminando la canciòn: ${id}`)
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.crearPlaylist("heavy");
reproductor.reproducirPlaylist("Rock")