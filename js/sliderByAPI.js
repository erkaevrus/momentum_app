
/*Unsplash API*/
async function getLinkToImage() {
    const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=UdOUxZn90BbjwN5ycKkGz1Qy6lEGWdzVswNxKp-9F8s`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.urls.regular)
}

/*Flickr API*/

async function getLinkToImageFlickr() {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6d88a2ce27f1f89b2ccb8bf2c1c96f0e&tags=nature&extras=url_l&format=json&nojsoncallback=1`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.photos.photo[0].url_l)
}
