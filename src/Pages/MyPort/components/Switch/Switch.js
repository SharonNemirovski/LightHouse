import React from 'react'
import { PortsData } from '../../../../components/Switch/SwitchData';
import RJgreen from '../../../../assests/Ports/RJgreen.png';
import RJred from '../../../../assests/Ports/RJred.png';
import RJgreen180 from '../../../../assests/Ports/RJgreen180.png';
import RJred180 from '../../../../assests/Ports/RJred180.png';
import RJGrey from '../../../../assests/Ports/RJGrey.png';
import RJGrey180 from '../../../../assests/Ports/RJGrey180.png';
import Swords from '../../../../assests/Ports/Swords.png';
import Swords180 from '../../../../assests/Ports/Swords180.png';
import "./Switch.scss";
function Switch() {

    function getPortStatus(i, q) {
        if ((q + 1) % 2 !== 0) {
          switch (i.status) {
            case 'good':
              return RJgreen180;
            case 'bad':
              return RJred180;
            case 'swords':
              return Swords180;
            default:
              return RJGrey180;
          }
        } else {
          switch (i.status) {
            case 'good':
              return RJgreen;
            case 'bad':
              return RJred;
            case 'swords':
              return Swords;
            default:
              return RJGrey;
          }
        }
      }
    return (
            <div className="Switch">
                <ul>
                    {PortsData[1].map((item, index) => {
                    return (
                    <li
      key={index}
      className={
        (index + 1) % 8 === 0 || (index + 2) % 8 === 0
          ? 'pic'
          : ''
      }
    >
      <div className="portsName">
        <div
          id={
            (index + 1) % 2 !== 0
              ? 'descriptionTRUE'
              : 'descriptionFALSE'
          }
        >
          {index + 1}
        </div>
        <div className="PortStatus">
          <img
            src={getPortStatus(item, index)}
            alt=""
          ></img>
        </div>
        <div
          id={
            (index + 1) % 2 !== 0
              ? 'descriptionFALSE'
              : 'descriptionTRUE'
          }
        >
          {index + 1}
        </div>
      </div>
    </li>
                            );
                        })}
                </ul>
            </div>
    )
}

export default Switch
