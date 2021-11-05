import React, { useState } from "react";
import { Map, Marker } from "pigeon-maps";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function ContentMap({ data }) {
  const hue = 100;
  const zoom = 7;
  const color = `hsl(${hue % 360}deg 39% 70%)`;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState([])

  function handleModalData(city) {
    setIsOpen(true);
    setModalData(city)
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <span class="icon-text is-flex is-justify-content-center">
        <span class="icon">
          <i class="fas fa-map-marker-alt"></i>
        </span>
        <span>
          <h2 class="is-size-4 has-text-weight-normal has-text-dark mb-2 has-text-centered is-uppercase is-family-monospace	mb-3">
            Map
          </h2>
        </span>
      </span>
      <Map
        height={500}
        defaultCenter={[20.96910898341704, 105.78057000335417]}
        defaultZoom={zoom}
      >
        {data && data.length > 0 && data.map((city) => {
          return (
              <Marker
                key={city.id}
                width={35}
                height={35}
                anchor={[city.latitude, city.longitude]}
                color={color}
                payload={1}
                onClick={() => handleModalData(city)}
              />
          );
        })}
      </Map>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>{modalData.address}</h2>
      </Modal>
    </div>
  );
}

export default ContentMap;
