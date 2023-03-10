import React, {FC} from 'react';

const Title:FC = () => {
  return (
    <div className="todos__title">
      <p className="todos__title-item">ID</p>
      <p className="todos__title-item">TITLE</p>
      <p className="todos__title-item">DESCRIPTION</p>
      <p className="todos__title-item">STATUS</p>
    </div>
  );
};

export default Title;