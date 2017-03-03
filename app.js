let  superheroesData = [
    {name:"Black panther", phone_number: "349-898-7483", comics_affiliation: "Marvel", image_url: "http://ironheadstudio.com/wp-content/uploads/2016/05/Black-Panther-5.jpg"},
    {name:"Iron Man", phone_number: "832-483-4432", comics_affiliation: "Marvel", image_url: "https://i.annihil.us/u/prod/marvel/i/mg/c/60/55b6a28ef24fa.jpg"},
    {name:"Batman", phone_number: "293-243-1542", comics_affiliation: "DC", image_url: "http://cartoonbros.com/wp-content/uploads/2016/05/Batman-5.jpg"},
    {name:"Superman", phone_number: "410-253-2563", comics_affiliation: "DC", image_url: "http://media.dcentertainment.com/sites/default/files/GalleryChar_1900x900_MOS_52e05e3fe24a61.04593858.jpg"},
    {name:"Spiderman", phone_number: "443-363-2592", comics_affiliation: "Marvel", image_url: "https://cdn0.vox-cdn.com/thumbor/6HMpe8tx99Xv2BYt6Y1Fa0zhrLE=/0x0:1012x675/1280x854/cdn0.vox-cdn.com/uploads/chorus_image/image/45661554/amazing-spider-man-poster-battle-damage.0.0.jpg"},
    {name:"Captain America", phone_number: "610-452-4633", comics_affiliation: "Marvel", image_url: "http://115.imagebam.com/download/IL2fKxg0D0JmWPyleGF3-g/47900/478995554/Captain%20America%201.jpg"},
    {name:"Winter Soldier", phone_number: "610-305-3842", comics_affiliation: "Marvel", image_url: "https://media.giphy.com/media/EeAN5nxbwYaKQ/giphy.gif"},
    {name:"Wolverine", phone_number: "442-053-1624", comics_affiliation: "DC", image_url: "http://static.srcdn.com/wp-content/uploads/X.jpg"},
    {name:"Deadpool", phone_number: "607-492-3325", comics_affiliation: "DC", image_url: "http://s3.foxmovies.com/foxmovies/production/films/103/images/gallery/deadpool1-gallery-image.jpg"},
    {name:"Thor", phone_number: "704-294-1462", comics_affiliation: "Marvel", image_url: "http://www.drodd.com/images13/thor14.jpg"},
    {name:"Hulk", phone_number: "840-242-0482", comics_affiliation: "Marvel", image_url: "http://4.bp.blogspot.com/-huySdx74UzY/U24Dcs6PrII/AAAAAAAABRk/WiLSVqQiGWg/s1600/the-hulk+(1).jpg"}

]
angular
.module('superheroesApp', [])
.controller('superheroesCtrl', [ superheroesController ])

function superheroesController (){
    this.superheroes = superheroesData;
}
