import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
import './progress.css';

function BookProgress({ progress }) {
  return (
    <secction className="progress-section">
      <CircularProgressBar
        size={50}
        animationSmooth="1s ease-out"
        colorCircle="#f1f1f1"
        colorSlice="#0290ff"
        percent={progress}
        number={false}
      />
      <div className="progressDetails">
        <p>
          {progress}
          %
        </p>
        <span>{progress === 100 ? 'Completed' : 'Not Completed'}</span>
      </div>
    </secction>
  );
}

export default BookProgress;
BookProgress.propTypes = {
  progress: PropTypes.number.isRequired,
};
