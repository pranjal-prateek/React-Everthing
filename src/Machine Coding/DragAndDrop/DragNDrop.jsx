import React, { useState } from 'react';

const initialItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

const DragAndDrop = () => {
  const [items, setItems] = useState(initialItems);

  const onDragStart = (e, index) => {
    e.dataTransfer.setData('dragIndex', index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, dropIndex) => {
    e.preventDefault();
    const dragIndex = parseInt(e.dataTransfer.getData('dragIndex'), 10);

    if (dragIndex === dropIndex) return;

    const tempItems = [...items];
    const draggedItem = tempItems[dragIndex];
    tempItems.splice(dragIndex, 1);
    tempItems.splice(dropIndex, 0, draggedItem);
    setItems(tempItems);
  };

  const onDragEnd = (e) => {
    e.dataTransfer.clearData();
  };

  return (
    <div className="w-80 p-4 bg-gray-100 rounded-lg">
      {items.map((item, index) => (
        <div
          key={index}
          draggable
          onDragStart={(e) => onDragStart(e, index)}
          onDragOver={onDragOver}
          onDrop={(e) => onDrop(e, index)}
          onDragEnd={onDragEnd}
          className="p-4 mb-2 bg-white rounded shadow cursor-move"
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default DragAndDrop;
