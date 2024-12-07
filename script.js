

let int = document.querySelector('.input')
let btn = document.querySelector('.button')

btn.addEventListener('click', function(){
    let apiKey = '973577a89f59bd4e1f7f2cd07b919e92'
    let intValue = int.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${intValue}&appid=${apiKey}&units=metric&lang=uk`,{
        method:'GET'
    })
    .then(Response =>{
        if(!Response.ok){
            console.log('error')
        }
        return Response.json()
    })
    .then(value =>{
        console.log(value)
        let cont = document.querySelector('.wetherDetector')
        cont.innerHTML = ''
        
            let name = document.createElement('h1')
            name.className = 'name'
            name.textContent = `city: ${value.name}`
            cont.appendChild(name)
        // // // // // // // // //
            let temp = document.createElement('h2')
            temp.className = 'temp'
            temp.textContent = `temperature: ${value.main.temp} degree C`
            cont.appendChild(temp)
        // /// // // / // / / / / /
            let filTemp = document.createElement('h2')
            filTemp.className = 'fil-temp'
            filTemp.textContent = `temperature feel like: ${value.main.feels_like} degree C`
            cont.appendChild(filTemp)
        // // / / / // /// // / / / / /
            let clouds = document.createElement('h2')
            clouds.className = 'clouds'
            clouds.textContent = `clouds: ${value.clouds.all}%`
            cont.appendChild(clouds)
        // // // / // /// // //  // /
            let vis = document.createElement('h2')
            vis.className = 'visibility'
            vis.textContent = `visibility: ${value.visibility}`
            cont.appendChild(vis)
        // // /// // / // / //// // / 
            let pressure = document.createElement('h2')
            pressure.className = 'presure'
            pressure.textContent = `pressure:${value.main.pressure}`
            cont.appendChild(pressure)
        // /// // // // // /
            let yourCord = document.createElement('h2')
            yourCord.className = 'cords'
            yourCord.textContent = `city cordinates`
            cont.appendChild(yourCord)
        // // // // // / //
            let lon = document.createElement('h3')
            lon.className = 'lon'
            lon.textContent = `lon: ${value.coord.lon}`
            cont.appendChild(lon)
        // // // /// /// / // / // / 
            let lat = document.createElement('h3')
            lat.className = 'lat'
            lat.textContent = `lat: ${value.coord.lat}`
            cont.appendChild(lat)
    })
    .catch(error =>
        console.error(error)
    )
    }
)


