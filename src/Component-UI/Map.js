import React, { useState } from 'react';
import { Map, Marker } from 'pigeon-maps';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function ContentMap({ data }) {
  const hue = 100;
  const zoom = 7;
  const color = `hsl(${hue % 360}deg 39% 70%)`;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [maintainanceData, setMaintainanceData] = useState([]);
  const [modalData, setModalData] = useState([]);

  function handleModalData(maintainances, data) {
    setIsOpen(true);
    setMaintainanceData(maintainances);
    setModalData(data);
  }
  function closeModal() {
    setIsOpen(false);
  }

  function handleTypeTag(data) {
    if(data === "Lắp Đặt") {
        return <span class="tag is-success">{data}</span>
    } else if(data === "Sửa Chữa") {
        return <span class="tag is-danger">{data}</span>
    } else if(data === "Bảo Dưỡng") {
        return <span class="tag is-warning">{data}</span>
    } else if(data === "Nhắc Lịch") {
        return  <span class="tag is-warning is-light">{data}</span>
    }
    return data

}

  return (
    <div>
      <span class='icon-text is-flex is-justify-content-center'>
        <span class='icon'>
          <i class='fas fa-map-marker-alt'></i>
        </span>
        <span>
          <h2 class='is-size-4 has-text-weight-normal has-text-dark mb-2 has-text-centered is-uppercase is-family-monospace	mb-3'>
            Map
          </h2>
        </span>
      </span>
      <Map
        height={500}
        defaultCenter={[20.96910898341704, 105.78057000335417]}
        defaultZoom={zoom}
      >
        {data &&
          data.length > 0 &&
          data.map((city) => {
            return (
              <Marker
                key={city.id}
                width={35}
                height={35}
                anchor={[city.latitude, city.longitude]}
                color={color}
                payload={1}
                onClick={() => handleModalData(city.maintainances[0], city)}
              />
            );
          })}
      </Map>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
        ariaHideApp={false}
      >
        <div class='container'>
          <div class='columns'>
            <div class='column is-8'>
              <table class='table is-hoverable'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><p class="heading">{maintainanceData.id}</p></td>
                    <td><p class="heading">{modalData.address}</p></td>
                    <td><p class="heading">{handleTypeTag(maintainanceData.type)}</p></td>
                    <td><p class="heading">{maintainanceData.desc}</p></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class='column'>
              <figure class="image is-4by5">
              <img
                src={modalData.img}
                alt=''
              />
              </figure>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default ContentMap;
