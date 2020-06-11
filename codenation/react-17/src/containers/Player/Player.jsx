import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearPlayingTrack } from '../../store/actions/content';
import { BsPlayFill, BsPauseFill } from 'react-icons/bs';
import Ink from 'react-ink';

import './Player.scss';

const Player = () => {
  const audioElementRef = useRef();
  const { playingNowTrack } = useSelector((state) => state.content);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progressBarWidth, setProgressBarWidth] = useState('0%');
  const dispatch = useDispatch();

  const togglePlayPause = () => {
    const audioPlayer = audioElementRef.current;

    if (isPlaying && !audioPlayer.paused) {
      setIsPlaying(false);
      audioPlayer.pause();
    } else if (!isPlaying && audioPlayer.paused) {
      setIsPlaying(true);
      audioPlayer.play();
    }
  };

  const handleTrackProgression = () => {
    const audioPlayer = audioElementRef.current;
    const width = Math.floor((audioPlayer.currentTime / audioPlayer.duration) * 100) + '%';

    setProgressBarWidth(width);
  };

  const handleCompletion = () => {
    dispatch(clearPlayingTrack());
  };

  const hasPreview = playingNowTrack
    ? playingNowTrack.preview_url
      ? true
      : false
    : undefined;

  useEffect(() => {
    if (hasPreview === undefined) return;
    if (hasPreview === false) {
      setIsPlaying(false);
      setProgressBarWidth('100%');
      audioElementRef.current = null;
      return;
    }

    setIsPlaying(true);

  }, [hasPreview, playingNowTrack]);

  return (
    <div
      className={`player${
        !hasPreview ? ' no-preview' : playingNowTrack ? ' is-playing' : ''
      }`}

      data-testid="player"
    >
      {playingNowTrack && (
        <div className="player__wrapper">
          {playingNowTrack && (
            <div className="player__progress-bar">
              <div
                className="player__progress-bar__stroke"
                style={{ width: `${progressBarWidth}` }}
              />
            </div>
          )}
          <div className="container">
            <figure
              className="player__album-cover"
              style={{
                backgroundImage: `url(${
                  playingNowTrack.album?.images[1]?.url || ''
                })`,
              }}
            />

            <div className="player__status">
              <div className="player__artist">
                <span className="player__music">{playingNowTrack.name}</span>

                <span className="player__artists">
                  {playingNowTrack.artists &&
                    playingNowTrack.artists.map(({ name }) => name).join(', ')}
                </span>

                <div
                  className={`player__status__current${
                    !hasPreview ? ' no-preview' : isPlaying ? ' is-playing' : ''
                  }`}
                >
                  <span>Pausado</span>
                  <span>Reproduzindo</span>
                  <span>Indisponível</span>
                </div>
              </div>
            </div>

            {hasPreview && (
              <div className="player__controls" onClick={togglePlayPause}>
                <div
                  className={`player__control${!isPlaying ? ' is-paused' : ''}`}

                >
                  {!isPlaying ? <BsPlayFill /> : <BsPauseFill />}

                  <Ink />
                </div>
              </div>
            )}
          </div>

          {hasPreview && (
            <audio
              ref={audioElementRef}
              autoPlay
              onEnded={handleCompletion}
              onTimeUpdate={handleTrackProgression}
              preload="metadata"
              src={playingNowTrack.preview_url}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Player;