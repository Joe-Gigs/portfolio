import React, { useRef, useState } from "react";
import { AiFillStepBackward } from "react-icons/ai";
import { FaRegCirclePlay, FaRegCirclePause } from "react-icons/fa6";
import { AiFillStepForward } from "react-icons/ai";

import testSound from '../assets/tune1.mp3';
import testSound2 from '../assets/tune2.mp3';

let track_list = [
  {
    name: "Vcv Jam",
    artist: "me",
    path: testSound
  },
  {
    name: "Vcv Jam 2",
    artist: "me",
    path: testSound2
  }
];

const Audioreel = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [track_index, setTrackIndex] = useState(0);

  // Initializing audio element
  React.useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = track_list[track_index].path;
    }
  }, [track_index]);

  function playPause() {
    console.log('click');
    
    if (!isPlaying) {
      playTrack();
    } else {
      pauseTrack();
    }
  }

  function playTrack() {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }

  function pauseTrack() {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }

  function prevTrack() {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
    
    if (track_index === 0) {
      setTrackIndex(track_list.length - 1);
    } else {
      setTrackIndex(track_index - 1);
    }
  }

  function nextTrack() {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
    
    if (track_index === track_list.length - 1) {
      setTrackIndex(0);
    } else {
      setTrackIndex(track_index + 1);
    }
  }


  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen flex items-center justify-center py-16 px-4">
      {/* Hidden audio element */}
      <audio ref={audioRef} />

      <div className="max-w-4xl w-full mx-auto">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-700/50 p-8 md:p-12">
          
          {/* Track Info Section */}
          <div className="text-center mb-12">
            <div className="mb-6">
              <div className="w-48 h-48 md:w-64 md:h-64 mx-auto bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl shadow-lg flex items-center justify-center mb-6">
                <div className="w-40 h-40 md:w-52 md:h-52 bg-gray-800 rounded-xl flex items-center justify-center">
                  <div className="text-4xl md:text-6xl">🎵</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {track_list[track_index].name}
              </h2>
              <p className="text-lg md:text-xl text-gray-300">
                {track_list[track_index].artist}
              </p>
              <p className="text-sm text-gray-400">
                Now Playing
              </p>
            </div>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-center space-x-8 mb-12">
            <button 
              onClick={prevTrack}
              className="p-3 hover:bg-gray-700/50 rounded-full transition-all duration-200 hover:scale-110 text-gray-300 hover:text-white"
            >
              <AiFillStepBackward size={40} />
            </button>
            
            <button 
              onClick={playPause}
              className="p-4 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 rounded-full transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              {isPlaying ? <FaRegCirclePause size={50} /> : <FaRegCirclePlay size={50} />}
            </button>
            
            <button 
              onClick={nextTrack}
              className="p-3 hover:bg-gray-700/50 rounded-full transition-all duration-200 hover:scale-110 text-gray-300 hover:text-white"
            >
              <AiFillStepForward size={40} />
            </button>
          </div>

 

        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #8b5cf6, #3b82f6);
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(139, 92, 246, 0.3);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #8b5cf6, #3b82f6);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(139, 92, 246, 0.3);
        }
      `}</style>
    </section>
  )
}

export default Audioreel;