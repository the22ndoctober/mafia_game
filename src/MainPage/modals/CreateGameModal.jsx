import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import IconButton from '@mui/material/IconButton'
import DropDown from './DropDown'
import options from '../../Strore/jsons/players.json'

 
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
  outline: 'none',
  color: '#fff'
}

export default function CreateGameModal({open, handleClose}) {
  const [value, setValue] = useState(null)


  return (
    <div>
      
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        
        <Box sx={style}>
          
          <IconButton variant="outlined" style={close} onClick={handleClose}>
            X
          </IconButton>
          <div style={{width: 300}}>
            <DropDown 
              options={options} 
              prompt={'Выберите игрока'}
              value={value}
              onChange={val => setValue(val)}
            />
          </div>

        </Box>
      </Modal>
    </div>
  );
}
