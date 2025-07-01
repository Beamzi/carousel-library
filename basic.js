


const imgArr = ['blue', 'green', 'red', 'purple']

let translateSum = 0

const imgContainer = document.querySelector('.carousel__img-container')

for (let i = 0; i < 3; i++) {
    imgArr.forEach((item, index) => {
        const imgs = document.createElement('div')
        imgs.classList.add('imgs')
        imgs.style['background-color'] = item
        imgContainer.append(imgs)
        imgs.className = `imgs`
    })
}

const leftBtn = document.querySelector('.left-btn')


leftBtn.addEventListener('click', () => {
    translateSum += 100
    imgContainer.style.transition = 'transform 0.2s ease-in'
    if (translateSum === 100 * (imgArr.length + 1)) {
        imgContainer.style.transform = 'translateX(-500px)'
        translateSum = 100
        setTimeout(() => {
            imgContainer.style.transform = `translateX(-${translateSum}px)`
            imgContainer.style.transition = 'none'

        }, 200)
    }
    else {
    imgContainer.style.transform = `translateX(-${translateSum}px)`
    }
})