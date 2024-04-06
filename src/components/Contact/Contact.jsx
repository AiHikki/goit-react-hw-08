import { IoPerson } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import c from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { MdDelete } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import toast from 'react-hot-toast';
import EditForm from '../EditForm/EditForm';

const ITEM_HEIGHT = 48;

const Contact = ({ contact: { name, number, id } }) => {
  const [isEdited, setIsEdited] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .catch(() =>
        toast.error('Oops... Something went wrong', {
          id: 'deleteError',
        })
      );
  };

  const handleEdit = () => {
    setIsEdited(true);
    setAnchorEl(null);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={c.contact}>
      <div className={c.info}>
        <div className={c.icons}>
          <IoPerson className={c.icon} />
          <FaPhoneAlt className={c.icon} />
        </div>

        {isEdited ? (
          <EditForm contact={{ name, number, id }} handleEdit={setIsEdited} />
        ) : (
          <div>
            <div className={c.data}>
              <p>{name}</p>
              <p>{number}</p>
            </div>
          </div>
        )}
      </div>

      {!isEdited && (
        <div>
          <IconButton
            aria-label="more"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
              'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
              },
            }}
          >
            <MenuItem
              onClick={() => {
                handleClose();
                handleEdit();
              }}
            >
              <div className={c.menuItem}>
                <div>Edit</div>
                <div>
                  <MdEdit size={20} className={c.icon} />
                </div>
              </div>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                handleDelete();
              }}
            >
              <div className={c.menuItem}>
                <div>Delete</div>
                <div>
                  <MdDelete size={20} className={c.icon} />
                </div>
              </div>
            </MenuItem>
          </Menu>
        </div>
      )}
    </div>
  );
};

export default Contact;
