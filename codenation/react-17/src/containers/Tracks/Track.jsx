import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPlayingTrack, clearPlayingTrack } from '../../store/actions/content';

import { BsPlayFill, BsVolumeUpFill } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import Ink from 'react-ink';

import './Track.scss';

const Track = ({ track }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { playingNowId } = useSelector(state => state.content);
  const dispatch = useDispatch();

  useEffect(() => {
    if (playingNowId !== track.id) {
      setIsPlaying(false);
    }
  }, [track.id, playingNowId]);

  const handleClick = () => {
    if (isPlaying && playingNowId === track.id) {
      setIsPlaying(false);
      dispatch(clearPlayingTrack());
      return;
    }

    dispatch(setPlayingTrack(track));
    setIsPlaying(true);
  };

  return (
    <div onClick={handleClick} className={`track`} data-testid="track">

      <div className="track__play">
        <div className="track__play__wrapper">
          {isPlaying ? (
            <MdClose className="track__play__icon" />
          ) : (
            <BsPlayFill className="track__play__icon" />
          )}
          <BsVolumeUpFill className="track__play__icon" />
        </div>
      </div>

      <div className="track__info">
        <span className="track__name">{track.name}</span>

        <span className="track__artists">
          {track.artists.length &&
            track.artists.map(({ name }) => name).join(', ')}
        </span>
      </div>
      <Ink />
    </div>
  );
};

export default Track;