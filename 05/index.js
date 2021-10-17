const IMAGE_API_URL = 'https://picsum.photos/200/300'
// const TEXT_API_URL = 'https://dummyapi.io/data/v1/user?limit=10'
const imageElement = document.getElementById('image')

// 1. Реализовать упрощенный вариант функции fetch() используя Promise + XHR (XMLHttpRequest), в response должны быть реализованы методы json(), text() и желательно blob()
// Документация по fetch() - https://developer.mozilla.org/en-US/docs/Web/API/fetch
// Документация по XMLHttpRequest - https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest
// Документация по Blob - https://developer.mozilla.org/ru/docs/Web/API/Blob

function myFetch(url, options) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(options ? options.method : 'GET', url)
        // Тип ответа blob, нужен для метода blob(),
        // чтобы не писать километровый код для обработки ответа, проще блоб в текст перевести, чем наоборот
        xhr.responseType = 'blob';
        xhr.setRequestHeader('app-id', '6155fa5472aa4147002c1df3'); // Раскомментировать для текстового API
        xhr.onload = () => {
            resolve({
                data: xhr.response,
                json: function () {
                    return JSON.parse(this.data)
                },
                text: function () {
                    return JSON.stringify(this.data)
                },
                blob: function () {
                   return new Blob([this.data], {type: 'image/jpg'})
                }
            })
        }

        xhr.send()
    })
}

// 2. Загрузить изображение, преобразовать его в Blob и используя FileReader преобразовать в формат DataUrl, далее используя функцию insertImage вставить DataUrl в тег img (добавить обработку ошибок)
// Документация по FileReader - https://developer.mozilla.org/ru/docs/Web/API/FileReader и https://developer.mozilla.org/ru/docs/Web/API/FileReader/FileReader

myFetch(IMAGE_API_URL)
    .then(response => {
        return  response.data
    })
    .then(res => {
        const reader = new FileReader()
        reader.readAsDataURL(res)
        reader.onload = () => {
            // Должна отобразиться картинка
            insertImage(reader.result)
        }
    })


function insertImage(src) {
    imageElement.src = src
}

// let promise = fetch(IMAGE_API_URL)

// promise
//     .then(response => response.blob())
//     .then(res => {
//         const reader = new FileReader()
//         reader.readAsDataURL(res)
//         reader.onload = () => {
//             // Должна отобразиться картинка
//             insertImage(reader.result)
//         }
//     })

