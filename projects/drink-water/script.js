const liters = document.getElementById('liters')
const remained = document.getElementById('remained')
const percentage = document.getElementById('percentage')
const smallCups = document.querySelectorAll('.cup-small')

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', highlightCups2)
})

function highlightCups(idx) {
    if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }

    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })
}

function highlightCups2() {
    smallCups[0].classList.add('full')
    smallCups[1].classList.add('full')
    smallCups[2].classList.add('full')
    smallCups[3].classList.add('full')
}