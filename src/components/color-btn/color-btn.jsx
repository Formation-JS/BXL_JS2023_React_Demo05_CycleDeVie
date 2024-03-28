import { useEffect } from 'react';
import { useState } from 'react';

const ColorBtn = () => {
    const [color, setColor] = useState('Rouge');
    const [nbOp, setnbOp] = useState(0);

    useEffect(() => {
        // Effect
        console.log(`Effect : ${color}`);

        return () => {
            // Cleanup
            console.log(`Cleanup : ${color}`);
        }
    }, [color])

    useEffect(() => {
        console.log(`Vous avez cliqué ${nbOp}`);
    })

    const handleColor = (color) => {
        setColor(color);
        setnbOp(op => op + 1);
    };

    return (
        <>
            <p>{color}</p>
            <div>
                <button onClick={() => handleColor('Rouge')}>Rouge</button>
                <button onClick={() => handleColor('Bleu')}>Bleu</button>
                <button onClick={() => handleColor('Vert')}>Vert</button>
            </div>
        </>
    )
}

export default ColorBtn;