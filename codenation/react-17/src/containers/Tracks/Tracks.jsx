import React from 'react';
import { Loading, RouteHeader } from '../../components';
import Track from './Track';
import './Tracks.scss';

const Tracks = ({ categoryName, tracks, isLoading, path }) => (
  
  <div className="tracks" data-testid="tracks">
  
    <div className="container">
      <RouteHeader categoryName={categoryName} path={path} />
  
      {isLoading ? (
        <Loading text="Carregando tracks..." />
      ) : (
        <div className="tracks__content">
          {tracks.length &&
            tracks.map(({ track }, index) => (
              <Track key={`${index} - ${track.id}`} track={track} />
            ))}
        </div>
      )}
      
    </div>
  </div>
);

export default Tracks;