import React  from "react";
    
const AlbumInfo = (props) => {
    
    return (
        <div className="myAlbum"> 
            <div style={{color:'brown'}}>{props.album.Artist}</div>
            <div className="myAlbumImg"><img style={{width: '500px'}} alt="" src={props.album.Img} /></div>
            <div>{props.album.Released}</div>
            <div>{props.album.Genre}</div>
            <div>{props.album.Country}</div>
            <div>{props.album.Language}</div>      
        </div>
    )
}
export default AlbumInfo;     