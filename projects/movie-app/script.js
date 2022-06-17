const DISCOVER_API = 'https://api.themoviedb.org/3/discover/movie?api_key=fb3c7d2bcaff876e6c47ec259dfba6d2&sort_by=popularity.desc&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=fb3c7d2bcaff876e6c47ec259dfba6d2&query='

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

//Get initial movie data
getMovies(DISCOVER_API)

async function getMovies(url) {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    showMovies(data.results)
}

function showMovies(movies) {
    main.innerHTML = ''
    movies.forEach((movie) => {
        const {
            title,
            poster_path,
            vote_average,
            overview
        } = movie
        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        movieEl.innerHTML = `
            <img src="${IMG_PATH+poster_path}" alt="${title}">
            <div class="movie-title">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>overview</h3>
                ${overview}
            </div>
        `
        main.appendChild(movieEl)
    });

}

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const searchTerm = search.value

    if (searchTerm && searchTerm != '') {
        getMovies(SEARCH_API + searchTerm)
        search.value = ''
    } else {
        windows.location.reload()
    }
})