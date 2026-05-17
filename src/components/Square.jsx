export default function Square({ value, onSquareClick }) {
    return (
        <button className="square" onClick={onSquareClick} style={{ color: value === 'X' ? '#e61313' : '#0059ff' }}> {value} </button>
    );
}