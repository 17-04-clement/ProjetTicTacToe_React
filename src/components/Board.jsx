import Square from "./Square";

export default function Board({ squares, onPlay }) {
    function handleClick(i) {
        onPlay(i); // on envoie l’index
    }

    return (
        <>
            <div className="board">

                {[0, 1, 2].map(row => (
                    
                    <div key={row} className="board-row">

                        {[0, 1, 2].map(col => {
                            const i = row * 3 + col;

                            return (
                                <Square key={i} value={squares[i]} onSquareClick={() => handleClick(i)} />
                            );
                        })}

                    </div>
                ))}
                                            
            </div>
        </>
    );
}