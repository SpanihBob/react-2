import React  from "react";
import MyInput from "./Input/MyInput";
import MyButton from "./Button/MyButton";
import { useState } from "react";
    
const MyPageApdate = () => {
    const [aboutMe, setAboutMe] = useState("");
    const [contacts, setContacts] = useState("");
    const [name, setName] = useState("");
    const [profession, setProfession] = useState("");
    const [education, setEducation] = useState("");
    const [exp, setExp] = useState("");
    const [photo, setPhoto] = useState("https://avatars.mds.yandex.net/i?id=b00d0266859354008c84e1f0b0606f90-5483853-images-thumbs&n=13");
    let [condition, changeState] = useState(true);
    
    const addInfo = (event) => {
        event.preventDefault()
        const newInfo = {
            aboutMe,
            contacts,
            name,
            profession,
            education,
            exp,
            photo,
        }
        changeState(false);
        console.log(condition);
    }
    const back = (event) => {
        event.preventDefault()
        changeState(true);
    }
    
    return (
        <div>
           {condition===true &&
               <form className="form" action="POST">
            <div className="myPage"> 
                <div className="pfoto">
                    <div className="myAlbumImg"><img style={{width: '400px'}} src={photo} alt="" /></div>
                    <div style={{color:'brown'}}><MyInput placeholder="AboutMe" 
                        value={aboutMe}
                        onChange={e =>setAboutMe(e.target.value)}/></div>
                    <div>
                        <p><b>Contacts:</b></p>
                        <div><MyInput placeholder="Contacts" 
                            value={contacts}
                            onChange={e =>setContacts(e.target.value)} /></div>                    
                    </div>
                </div>
                <div className="info">  
                <div>
                        <div className="fs b p"><MyInput placeholder="Name" 
                            value={name}
                            onChange={e =>setName(e.target.value)} /></div>
                </div>
                    <div>
                        <div className="fs p"><MyInput placeholder="Profession" 
                            value={profession}
                            onChange={e =>setProfession(e.target.value)} /></div>
                    </div>
                    <div>
                        <p><b>Education:</b></p>
                        <div><MyInput placeholder="Education" 
                            value={education}
                            onChange={e =>setEducation(e.target.value)} /></div>
                    </div>
                    <div>
                        <p><b>Experience:</b></p>
                        <div><MyInput placeholder="Exp" 
                            value={exp}
                            onChange={e =>setExp(e.target.value)}
                             /></div>                       
                    </div>
                    <div>
                        <p><b>Pfoto:</b></p>
                        <div><MyInput placeholder="Photo" 
                            value={photo}
                            onChange={e =>setPhoto(e.target.value)}
                             /></div>                       
                    </div>
                    <div>
                        <MyButton onClick={addInfo}>Enter</MyButton>
                    </div>
                </div>
            </div>
            </form>} 

        {condition === false &&
            <div className="page">
            <div className="myPage"> 
            <div className="pfoto">
                <div className="myAlbumImg"><img style={{width: '400px'}} src={photo} alt="" /></div>
                <div style={{color:'brown'}}>{aboutMe}</div>
                <div>
                    <p><b>Contacts:</b></p>
                    {contacts}                    
                </div>
            </div>
            <div className="info">  
               <div>
                    <div className="fs b p">{name}</div>
               </div>
                <div>
                    <div className="fs p"> {profession}</div>
                </div>
                <div>
                    <p><b>Education:</b></p>                     
                        <div className="p">{education}</div>                     
                </div>
                <div>
                    <p><b>Experience:</b></p>
                        <div className="p">{exp}</div>
                </div>
                <div>
                    <MyButton onClick={back}>Change</MyButton>
                </div>
            </div>
        </div>
    </div>}
</div>  
    )
}
export default MyPageApdate;     