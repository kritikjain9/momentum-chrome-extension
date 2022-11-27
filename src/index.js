
const res = fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=sports')
const data = res.then(res => res.json())
const image = data.then((imageData) => {
    document.body.style.backgroundImage = `url('${imageData.urls.full}')`;
})

