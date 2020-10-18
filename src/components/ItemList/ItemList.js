import React from 'react';
import Item from '../Item/Item';
import styles from'./ItemList.module.css';
import PropTypes from 'prop-types';

const ItemList = ({tasks, onClickDone, deleteTask, editTask, tempValue, setTempValue, aproveTask, editingError, errorMessage,  setError, setErrorMessage}) => ( 
  <ul className={styles.itemList}>
    {tasks.map( (task) =>
      task.isVisible && <Item
        key={task.id} 
        itemValue={task.value}
        isDone={task.isDone}
        isEditing={task.isEditing}
        id={task.id}
        onClickDone={onClickDone}
        deleteTask={deleteTask}
        editTask={editTask}
        tempValue={tempValue}
        setTempValue={setTempValue}
        aproveTask={aproveTask}
        editingError={editingError}
        errorMessage={errorMessage}
        setError={setError}
        setErrorMessage={setErrorMessage}
      />
    )}
  </ul>
);


Item.propTypes = {
  tasks: PropTypes.array,
}

export default ItemList;
