import { useRef, useState, useEffect } from 'react';
import Soundtrack from "../assets/soundtrack.mp3";


export default function SoundPlayer() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
  
    useEffect(() => {
      audioRef.current.addEventListener('ended', () => {
        audioRef.current.currentTime = 0; // Reset the audio to the beginning
        audioRef.current.play();
      });
    }, []);
  
    const togglePlay = () => {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    };
    return (
        <>
            <div>
      <audio ref={audioRef} loop>
        <source src={Soundtrack} type="audio/mpeg" />
      </audio>
      <button onClick={togglePlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
        </>
    )
}