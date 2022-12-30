import React from 'react'
import { Row , Col, Accordion} from "react-bootstrap";

const UserInfo = props => {
  return (
    <div className="font-gotham flex items-center justify-center flex-col w-full">
      <Accordion>
        <Accordion.Item>
          <Accordion.Button className="text-3xl">Top Artists</Accordion.Button>
          <Accordion.Body>
            <Row className="w-7/8 flex justify-center">
              {props.artists.map((item, index) => (
                <Col id={index} xs={2} xl={2} className="m-2">
                  <div className="mb-4 text-center">{item.name}</div>
                  <img
                    className="mb-4 w-fit h-fit rounded-full"
                    src={item.images[0].url}
                    alt={item.name}
                  />
                </Col>
              ))}
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion>
        <Accordion.Item>
          <Accordion.Button className="text-3xl">Top Tracks</Accordion.Button>
          <Accordion.Body>
            <Row className="w-7/8 flex justify-center">
              {props.tracks.map((item, index) => (
                <Col className="m-2" id={index} xs={2} xl={2}>
                  <div className="mb-4 text-center">{item.name}</div>
                  <img
                    className="mb-4 w-fit h-fit rounded-full"
                    src={item.album.images[0].url}
                    alt={item.name}
                  />
                </Col>
              ))}
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
  }

export default UserInfo