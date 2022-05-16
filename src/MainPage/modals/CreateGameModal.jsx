import React from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const close = {
  position: 'absolute',
  right: 0,
  top: '-50px',
  border: 'none',
  outline: 'none'
}

export default function CreateGameModal({open, handleClose}) {
  return (
    <div>
      
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
        <Box sx={style}>
          
          <Button variant="outlined" color="error" style={close} onClick={handleClose}>X</Button>
        </Box>
      </Modal>
    </div>
  );
}
