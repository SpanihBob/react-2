// Задание 1
// Создайте приложение «Любимый музыкальный альбом».
// Оно будет содержать информацию о вашем любимом музы-
// кальном альбоме: название альбома, название исполнителя,
// год издания, издатель, обложка альбома и т.д. Обязательно
// используйте компоненты и props.


import React, {useState} from "react";
import AlbumInfo from "./AlbumInfo";

const FavoriteAlbum = (props) => {

    const [album] = useState([         
        { 
          id: 1,
          Artist: "Drummatix",
          Img:'https://lastfm.freetls.fastly.net/i/u/770x0/14478ff9801825fb175f2a05933b149b.jpg#14478ff9801825fb175f2a05933b149b',
          Released:'2019',
          Genre:'hip-hop / rap',
          Country:'Russia',
          Language:'Russian',
        },
        {
          id: 2,
          Artist: "Basta",
          Img:'https://upload.wikimedia.org/wikipedia/ru/5/5d/%D0%91%D0%B0%D1%81%D1%82%D0%B0_4.jpg',
          Released:'2013',
          Genre:'hip-hop / rap',
          Country:'Russia',
          Language:'Russian',
        }   
      ]) 

    return (
        <div className="h1">
            <h1>{props.title}</h1> 
            {
        album.map(al => 
            <div style={{marginBottom:'50px'}}> 
                <AlbumInfo album={al} key={al.id} /> 
            </div>
        )}      
        </div>
    )
}
export default FavoriteAlbum;     