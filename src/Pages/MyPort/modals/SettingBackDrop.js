import React from 'react'
import './modals.scss'
import Logo2 from '../../../assests/clearLIGHT.png';
function SettingBackDrop({onClose}) {
    return (
        <div className = "Backdrop">
            <div className = "Form" >
                    <div className = "present">
                        <div className="icon">
                            <img src={Logo2}/>
                        </div>
                        <div className="data">
                            <p>
                                מלא מידע על וילאן , סיגמנט , דיפולט גייטואיי וכו וכו
                            </p>
                        </div>
                        <div className="closeButton" onClick ={()=>{onClose()}}>
                            Close
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default SettingBackDrop
