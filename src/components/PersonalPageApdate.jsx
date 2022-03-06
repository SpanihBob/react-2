// Задание 3
// Модифицируйте приложение «Персональная страница».
// Для отображения части информации используйте текстовые
// поля. Например: ФИО, телефон, email, город проживания
// и т.д. Наличие текстовых полей позволяет пользователю мо-
// дифицировать исходные данные. Также добавьте кнопку для
// возврата начальных значений. Используйте state для этого.

import React  from "react";
import MyPageApdate from "./MyPageApdate";

const PersonalPageApdate = (props) => {
    
    return (
        <div className="h1">
            <h1>{props.title}</h1>             
                <div style={{marginBottom:'50px'}}> 
                    <MyPageApdate /> 
                </div>              
        </div>
    )
}
export default PersonalPageApdate;