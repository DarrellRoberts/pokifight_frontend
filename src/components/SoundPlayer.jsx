import { useRef, useState, useEffect } from 'react';
import Soundtrack from "../assets/soundtrack.mp3";
import Sound from "../assets/sound.png";


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
        <div className="audio">
      <audio ref={audioRef} loop>
        <source src={Soundtrack} type="audio/mpeg" />
      </audio>
      {isPlaying ? 
      <img style={{filter: "contrast(0)"}} src={Sound} width="50px" onClick={togglePlay} />
      : <img src={Sound} width="50px" onClick={togglePlay} />}
      </div>
        </>
    )
}