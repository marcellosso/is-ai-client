import Image from 'next/image';
import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 0,
    padding: '2vw',
    height: '70vh',
    width: '50vw',
    background: 'transparent',
  },
  overlay: {
    zIndex: 100,
    backgroundColor: 'rgba(34,40,49,0.55)',
  },
};

interface IFullscreenImageModal {
  imageName: string;
  openFullscreenImageModal: boolean;
  setOpenFullscreenImageModal: (_v: boolean) => void;
}

const FullscreenImageModal: React.FC<IFullscreenImageModal> = ({
  imageName,
  openFullscreenImageModal,
  setOpenFullscreenImageModal,
}) => {
  return (
    <Modal
      isOpen={openFullscreenImageModal}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      style={customStyles as any}
      onRequestClose={() => setOpenFullscreenImageModal(false)}
      shouldCloseOnOverlayClick
    >
      <div
        className="w-full h-full absolute top-0 left-0 z-50"
        onClick={() => setOpenFullscreenImageModal(false)}
      />
      <Image
        src={`/assets/${imageName}`}
        alt="Level Image in fullscreen"
        quality={100}
        objectFit="contain"
        className="rounded shadow-2xl"
        layout="fill"
      />
    </Modal>
  );
};

export default FullscreenImageModal;
