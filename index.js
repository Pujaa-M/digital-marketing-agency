const scrollPeriodically = (position) => {
    const imageSlider = document.querySelector('.image-slider')
    const sliderIndicator = document.querySelector('.slider-indicator')
    const imageHolder = document.querySelector('.image-holder')
    const tab = document.querySelector('.tab')

    const indicatorList = sliderIndicator.querySelectorAll('li')
    const imagesList = imageSlider.querySelectorAll('.image-details')

    const tabImageList = imageHolder.querySelectorAll('.tab-image')
    const tabRows = tab.querySelectorAll('.row')

    if(imageSlider.getBoundingClientRect().top < window.innerHeight * 0.5 && imageSlider.getBoundingClientRect().top >= 0) {
        imagesList[position !== 0 ? (position * 4) + 3 : position].scrollIntoView({behavior: 'smooth', block: 'nearest'})
    }

    tabRows.forEach((row, index) => {
        if(index === position) {
            row.classList.add('red')
        }
        else {
            row.classList.remove('red')
        }
    })

    tabImageList[position % 2].classList.add('disappear')
    tabImageList[(position + 1) % 2].classList.remove('disappear')
}

let scrollPosition = 1

document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        scrollPeriodically(scrollPosition)
        scrollPosition = (scrollPosition + 1) % 3
    }, 5000)

    const imageSlider = document.querySelector('.image-slider')
    const imagesList = imageSlider.querySelectorAll('.image-details')

    const sliderIndicator = document.querySelector('.slider-indicator')
    const indicatorList = sliderIndicator.querySelectorAll('li')

    imageSlider.addEventListener("scroll", () => {
        imagesList.forEach((image, index) => {
            if(image.getBoundingClientRect().left <= window.innerWidth && image.getBoundingClientRect().left >= 0) {
                if((index + 1) % 4 === 0) {
                    indicatorList.forEach((indicator, position) => {
                        if(((index + 1) / 4) - 1 === position) {
                            indicator.classList.add('open-page')
                        }
                        else {
                            indicator.classList.remove('open-page')
                        }
                    })
                }
            }
        })
    })
})

const openModal = () => {
    const modalContainer = document.querySelector('.modal-container')
    modalContainer.style.display = 'flex'
}

const closeModal = () => {
    const modalContainer = document.querySelector('.modal-container')
    modalContainer.style.display = 'none'
}

const stayOpen = (event) => {
    event.stopPropagation()
}

const openLink = () => {
    window.open("https://www.fylehq.com", '_blank')
}