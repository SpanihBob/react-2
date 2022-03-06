import React /*{ useState }*/  from "react";
    
const MyPage = (props) => {

    return (
        <div className="myPage"> 
            <div className="pfoto">
                <div className="myAlbumImg"><img style={{width: '400px'}} src={props.page.Pfoto} alt="" /></div>
                <div style={{color:'brown'}}>{props.page.AboutMe}</div>
                <div>
                    <p><b>Contacts:</b></p>
                    {props.page.Contacts.map(data => 
                        <div>{data}</div> 
                    )}                    
                </div>
            </div>
            <div className="info">  
               <div>
                    <div className="fs b p">{props.page.Name}</div>
               </div>
                <div>
                    <div className="fs p"> {props.page.Profession}</div>
                </div>
                <div>
                    <p><b>Education:</b></p>
                    {
                    props.page.Education.map(data => 
                        <div className="p">{data}</div> 
                    )}
                </div>
                <div>
                    <p><b>Experience:</b></p>
                    {props.page.Exp.map(data => 
                        <div className="p">{data}</div> 
                    )}                       
                </div>
            </div>
        </div>
    )
}
export default MyPage;     