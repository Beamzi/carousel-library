


let translateSum = 2000

async function getProducts() {
    try {
        const request = await fetch('https://fakestoreapi.com/products/')
        const response = await request.json()
        return response
    }
    catch(e) {
        console.error(e)
    }
}

const imgContainer = document.querySelector('.carousel__img-container')

async function productElements() {
    const imgArr = await getProducts()
    for (let i = 0; i < 3; i++) {
        imgArr.forEach((item, index) => {
            const imgs = document.createElement('div')
            imgs.innerHTML = 
            `<div>
                <img src="${item.image}" class="pulledImages">
                <h3>${item.title}</h3>
                <h2>${item.price}</h2>
            </div>`
            imgs.classList.add('imgs')
            imgContainer.append(imgs)
        })
    }
    imgContainer.style.transform = `translateX(-${100 * imgArr.length}px)`
}
productElements()

async function rightBtnClick() {
    const leftBtn = document.querySelector('.right-btn')

    const imgArr = await getProducts();
    leftBtn.addEventListener('click', () => {
        translateSum += 100
                console.log(translateSum)

        imgContainer.style.transition = 'transform 0.2s ease-in'
        if (translateSum === 100 * (imgArr.length) * 2) {
            imgContainer.style.transform = `translateX(-${100 * (imgArr.length) * 2}px)`
            translateSum = 2000
            setTimeout(() => {
                imgContainer.style.transform = `translateX(-${translateSum}px)`
                imgContainer.style.transition = 'none'

            }, 200)
        }
        else {
        imgContainer.style.transform = `translateX(-${translateSum}px)`
        }
    })
}
rightBtnClick()


async function leftBtnClick() {
    const leftBtn = document.querySelector('.left-btn')
    const imgArr = await getProducts();
    leftBtn.addEventListener('click', () => {
        imgContainer.style.transition = 'transform 0.2s ease-in'
        if (translateSum === 100 * imgArr.length) {
            imgContainer.style.transform = `translateX(-${100 * (imgArr.length - 1)}px)`
            translateSum = 100 * (imgArr.length - 1)
            setTimeout(() => {
                imgContainer.style.transform = `translateX(-${100 * (imgArr.length) * 2 - 100}px)`
                imgContainer.style.transition = 'none'
                translateSum = 100 * (imgArr.length) * 2 - 100
            }, 200)
        }
        else {
            translateSum -= 100
            imgContainer.style.transform = `translateX(-${translateSum}px)`
        }
        console.log(translateSum)
    })
}
leftBtnClick()

