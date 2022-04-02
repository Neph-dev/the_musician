
import zaza1 from '../../Assets/emmanho1.jpeg'
import zaza2 from '../../Assets/emmanho2.jpg'
import zaza3 from '../../Assets/emmanho3.jpg'

const AlbumData = [
    {
        id: 1,
        album_type: "Single",
        title: "Au fond.",
        album_cover: zaza1,
        artist_1: "Emmanho",
        artist_2: "",
        genre: "Rap",
        price: "$1.99",
        songs: [
            {
                genre: "Rap",
                title: "Au fond.",
                artist_1: "Emmanho",
                artist_2: "",
                music: "",
                price: "$1.99",
            }
        ]
    },
    {
        id: 2,
        album_type: "Album",
        title: "ZAZA II",
        album_cover: zaza2,
        artist_1: "Emmanho",
        artist_2: "",
        genre: "Hip-Hop/Rap",
        price: "$9.99",
        songs: [
            {
                title: "00h00",
                artist_1: "Emmanho",
                artist_2: "",
                music: "",
                price: "$1.99",
            }
        ]
    },
    {
        id: 3,
        album_type: "Album",
        title: "ZAZA",
        album_cover: zaza3,
        artist_1: "Emmanho",
        artist_2: "",
        genre: "Rap",
        price: "$9.99",
        songs: [
            {
                title: "12h00",
                artist_1: "Emmanho",
                artist_2: "",
                music: "",
                price: "$9.99",
            }
        ]
    },
]

export default AlbumData