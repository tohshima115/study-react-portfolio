import Planet from "./Planet";
import Stars from "./Stras";

function Univers() {
    //const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    //const handleMouseMove = (event) => {
        //const { clientX, clientY } = event;
        //setMousePosition({ x: clientX, y: clientY });
    //};

    //const parallaxStyle = (depth) => {
        //const moveX = (mousePosition.x - window.innerWidth / 2) * depth;
        //const moveY = (mousePosition.y - window.innerHeight / 2) * depth;
        //return {
            //transform: `translate(${moveX}px, ${moveY}px)`
        //};
    //};

    return (
        <div>
            <Planet />
            <Stars />
        </div>
    );
}


export default Univers;