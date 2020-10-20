import React from 'react';
import styles from'./Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import classnames from 'classnames';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import PropTypes from 'prop-types';

const Item = ({
  itemValue,
  isDone,
  isEditing,
  onClickDone,
  id,
  deleteTask,
  editTask,
  tempValue,
  setTempValue,
  aproveTask,
  editingError,
  errorMessage,
  setError,
  setErrorMessage,
  onDragStart,
  onDragOver,
  onDrop,
  onDragLeave,
  index,
  dragAndDrop,
}) => {

  if (isEditing) {
    return (
      <li className={styles.container}
        onMouseLeave={ () => {
          if (tempValue) {
            aproveTask(id, tempValue)
          }
        }}
        onKeyPress={ (e) => {
          if (e.key === 'Enter' && tempValue) {
            aproveTask(id, tempValue)
          }
         }
        }
      >
        <TextField
          id='standard-basic'
          size='small'
          fullWidth
          value={tempValue}
          helperText={errorMessage || editingError}
          error={editingError}
          autoFocus={true}
          autoComplete={'off'}
          onChange={evt => {
            if (evt.target.value) {
              setTempValue(evt.target.value);
              setErrorMessage('');
              setError(false);
            } else {
              setTempValue(evt.target.value);
              setErrorMessage('Поле не должно быть пустым');
              setError(true);
            } 
          }
        }
        />
      </li>
    )
  } else {
    return (
      <li
        className={dragAndDrop && dragAndDrop.draggedTo=== Number(index) ? styles.dropArea : styles.container}
        data-position={index}
        draggable
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDrop={onDrop}
        onDragLeave={onDragLeave}
      >
        <Checkbox
            checked={isDone}
            color='default'
            inputProps={{ 'aria-label': 'checkbox with default color' }}
            onClick = { () => onClickDone(id) }
            className={styles.checkbox}
          />
        <p className={
          classnames({
            [styles.item]: true,
            [styles.done]: isDone,
          })}
          onDoubleClick={ () => editTask(id, itemValue) }
        >
          {itemValue}
        </p>
        <DeleteForeverIcon
          className={styles.deleteBtn}
          onClick = { () => deleteTask(id) }
        />
      </li>
    )
  }
}

Item.propTypes = {
  id: PropTypes.number,
  value: PropTypes.string,
  isDone: PropTypes.bool,
}

export default Item;
