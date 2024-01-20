import { useEffect, useRef, useState } from "react";


export function useTypingEffect(textToType, interKeyStrokeDurationInMs, initialDelayInMs) {
    const [currentPosition, setCurrentPosition] = useState(0);
    const currentPositionRef = useRef(0);
  
    useEffect(() => {
      // ディレイ後にタイピングアニメーションを開始
      const timeoutId = setTimeout(() => {
        const intervalId = setInterval(() => {
          setCurrentPosition((value) => value + 1);
          currentPositionRef.current += 1;
  
          if (currentPositionRef.current > textToType.length) {
            clearInterval(intervalId);
          }
        }, interKeyStrokeDurationInMs);
  
        return () => clearInterval(intervalId);
      }, initialDelayInMs);
  
      return () => {
        clearTimeout(timeoutId);
        currentPositionRef.current = 0;
        setCurrentPosition(0);
      };
    }, [interKeyStrokeDurationInMs, textToType, initialDelayInMs]);
  
    return textToType.substring(0, currentPosition);
}  