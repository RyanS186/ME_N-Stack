const Counter = (props) => {
    const score = props.score;
    return (
        <h2> The current score is {score}</h2>
    );
};

export default Counter;