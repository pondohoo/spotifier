import React from 'react'
import { Image } from 'react-bootstrap'

const Detail = ({album,artists,name}) => {
  return (
    <div className="font-gotham flex flex-col justify-center text-center">
      <Image className="w-1/2 h-auto" src={album.images[0].url} alt={name} />
      <label className="w-1/2" htmlFor={name}>
        {name} {" - "} {artists[0].name}
      </label>
    </div>
  );
}

export default Detail