import { React, useState } from 'react';
import './MyPort.scss';
import { PortsData } from '../../components/Switch/SwitchData';
import RJgreen from '../../assests/Ports/RJgreen.png';
import RJred from '../../assests/Ports/RJred.png';
import RJgreen180 from '../../assests/Ports/RJgreen180.png';
import RJred180 from '../../assests/Ports/RJred180.png';
import RJGrey from '../../assests/Ports/RJGrey.png';
import RJGrey180 from '../../assests/Ports/RJGrey180.png';
import Swords from '../../assests/Ports/Swords.png';
import Swords180 from '../../assests/Ports/Swords180.png';
import SW from '../../assests/SW.png'

export default function MyPort() {
  const [PortData, SetPortData] = useState({
    vlan: '',
    status: '',
    portName: '',
    MAC: '',
    vlanSEG: '',
  });

  const [viewPort, SetView] = useState(false);
  const OpenMyPort = (port) => {
    SetPortData({
      vlan: port.vlan,
      status: port.status,
      portName: port.name,
      MAC: port.MAC,
      vlanSEG: port.vlanSEG,
    });
    SetView(true);
  };

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
    <div>
      <div className="Main">
        <div className="header">
          <div className="search"></div>
        </div>
        <div className="Switch">
          <div className="wrapper">
            <ul>
              {PortsData.map((item, index) => {
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
                          onClick={() => OpenMyPort(item)}
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
        </div>
        {viewPort && (
          <div className="dataHolder">
            <div className="openMyPort">
              <div className="portTable">
                <div className="portArt">
                  <li>
                    <h1>Port Name</h1>
                  </li>
                  <hr></hr>
                  <li>
                    <h3>Port Status</h3>
                  </li>
                  <hr></hr>
                  <li>
                    <h3>Vlan</h3>
                  </li>
                  <hr></hr>
                  <li>
                    <h3>Vlan Prefix</h3>
                  </li>
                  <hr></hr>

                  <li>
                    <h3>MAC Address</h3>
                  </li>
                </div>
                <div className="portData">
                  <li>
                    <h1>{PortData.portName ? PortData.portName : '-'}</h1>
                  </li>
                  <hr></hr>
                  <li>
                    <h3>{PortData.status ? PortData.status : '-'}</h3>
                  </li>
                  <hr></hr>
                  <li>
                    <h3>{PortData.vlan ? PortData.vlan : '-'}</h3>
                  </li>
                  <hr></hr>
                  <li>
                    <h3>{PortData.vlanSEG ? PortData.vlanSEG : '-'}</h3>
                  </li>
                  <hr></hr>

                  <li>
                    <h3>{PortData.MAC ? PortData.MAC : '-'}</h3>
                  </li>
                </div>
              </div>
            </div>
            <div className="mySwitch">
             
              
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
