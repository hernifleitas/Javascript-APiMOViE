let pagina = 1;
const btnAnterior = document.getElementById("btnAnterior")
const btnSiguiente = document.getElementById("btnSiguiente")

btnSiguiente.addEventListener("click", () =>{
    if(pagina < 1000){
        pagina += 1
        cargarPeliculas()
    }
} )

btnAnterior.addEventListener("click", () => {
    if(pagina>1){
        pagina-=1
        cargarPeliculas()
    }
} )

const cargarPeliculas = async() => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=60e6895728718deca4c89306fd7bf886&language=es-AR&page=${pagina}`)
        
        const datos = await res.json()
        
        let peliculas = '';
        datos.results.forEach(pelicula => {
        peliculas += `
        <div class="pelicula">
        <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"></img>
        <h2>${pelicula.title}</h2>
        </div>
        `

       })
       document.getElementById("contenedor").innerHTML = peliculas
    }
    catch(err){
        console.log("err")
    }  
}
cargarPeliculas()