const authorName = document.getElementById('author')



const res = fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=football')
const data = res.then(res => res.json())
const image = data.then((imageData) => {
    // console.log(imageData);

    const imageUrl = imageData.urls.full
    document.body.style.backgroundImage = `url('${imageUrl}')`

    const author = imageData.user.first_name
    authorName.textContent = `By : ${author}`
})

