import React ,{useState} from 'react'
import './Home.scss'
import pakmaz from '../../assests/malnaps/PakmazLogo.png'
import patzan from '../../assests/malnaps/PazanLogo.png'
import padam from '../../assests/malnaps/PadamLogo.png'

function Login() {
    const [ImgPadamPlace ,  setPadamPlace] = useState('middle')
    const [ImgPatzanPlace , setPatzanPlace] = useState('middle')
    const [ImgPakmazPlace , setPakmazPlace] = useState('middle')
    const MalnapChoice = (choice) =>{
        switch (choice){
            case "padam":
                setPadamPlace('top');
                setPakmazPlace('middle');
                setPatzanPlace('middle');
                break;
            case "pakmaz":
                setPadamPlace('middle');
                setPakmazPlace('top');
                setPatzanPlace('middle');
                break;
            case "patzan":
                setPadamPlace('middle');
                setPakmazPlace('middle');
                setPatzanPlace('top');
                break
            default:
                setPadamPlace('middle');
                setPakmazPlace('middle');
                setPatzanPlace('middle');
                break;
        }
    }
    return (
        <div className = "landing">
            <div className={ImgPadamPlace}  >
                <img  onClick={()=>MalnapChoice('padam')} src={padam}/>
            </div>

            <div className={ImgPakmazPlace}>
                <img   onClick={()=>MalnapChoice('pakmaz')}  src={pakmaz}/>   
            </div>

            <div  className={ImgPatzanPlace}>
                <img  onClick={()=>MalnapChoice('patzan')} src={patzan}/>
            </div>
        </div>

    )
}

export default Login
