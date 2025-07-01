


let translateSum = 0


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

    for (let i = 0; i < 2; i++) {
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
            imgs.className = `imgs`
        })
    }
}
productElements()


async function leftBtnClick() {
    const leftBtn = document.querySelector('.left-btn')

    const imgArr = await getProducts();
    leftBtn.addEventListener('click', () => {
        translateSum += 100
        imgContainer.style.transition = 'transform 0.2s ease-in'
        if (translateSum === 100 * (imgArr.length + 1)) {
            imgContainer.style.transform = `translateX(-${100 * (imgArr.length + 1)}px)`
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
}
leftBtnClick()



async function rightBtnClick() {
    const leftBtn = document.querySelector('.right-btn')
    const imgArr = await getProducts();
    leftBtn.addEventListener('click', () => {
        translateSum += 100
        imgContainer.style.transition = 'transform 0.2s ease-in'
        if (translateSum === 100 * (imgArr.length + 1)) {
            imgContainer.style.transform = `translateX(${100 * (imgArr.length + 1)}px)`
            translateSum = 100
            setTimeout(() => {
                imgContainer.style.transform = `translateX(${translateSum}px)`
                imgContainer.style.transition = 'none'

            }, 200)
        }
        else {
        imgContainer.style.transform = `translateX(${translateSum}px)`
        }
    })
}
rightBtnClick()

