const authorName = document.getElementById('author')



const res = fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=puppies')
const data = res.then(res => res.json())
const image = data.then((imageData) => {
    // console.log(imageData);

    console.log(imageData.urls.full);
    const imageUrl = imageData.urls.full
    document.body.style.backgroundImage = `url('${imageUrl}')`

    const author = imageData.user.first_name
    authorName.textContent = `By : ${author}`
})
    .catch(err => {
        console.log(err);
        const defaultImageUrl = "https://images.unsplash.com/photo-1506780685701-ba404b9e640d?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2Njk2NzAzNDk&ixlib=rb-4.0.3&q=80"
        document.body.style.backgroundImage = `url('${defaultImageUrl}')`
    })

