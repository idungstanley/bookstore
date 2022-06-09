import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const status = useSelector((state) => state.categoriesReducer);
  const dispatch = useDispatch();
  const confirmStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <p>{status}</p>
      <button type="submit" className="status" onClick={confirmStatus}>
        Check status
      </button>
    </div>
  );
}

export default Categories;
