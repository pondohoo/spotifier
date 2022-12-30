import React, { useState } from 'react'
import { Accordion } from 'react-bootstrap'
import Detail from './Detail'




const Listbox = ({items}) => {
  const [trackDetail, setTrackDetail] = useState(null);
    const clicked = event => {
        event.preventDefault()
        listBoxClicked(event.target.id)
    }
    const listBoxClicked = val => {
      const trackInfo = items.filter((item) => (item.track.id === val));
      setTrackDetail(trackInfo[0].track);
    };

  return (
    <Accordion
      className="font-gotham flex-col flex items-center w-full"
      flush
      alwaysOpen
    >
      {items.map((item, index) => (
        <Accordion.Item className="flex flex-col" id={`element${index}`} eventKey={index}>
          <Accordion.Button
            className="!rounded-t-lg text-center -mt-3.5 " 
            onClick={clicked}
            id={item.track.id}
          >
            {item.track.name}
          </Accordion.Button>
          <Accordion.Body eventKey={index}>{trackDetail && <Detail {...trackDetail} /> }</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default Listbox