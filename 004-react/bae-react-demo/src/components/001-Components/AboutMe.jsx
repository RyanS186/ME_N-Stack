const AboutMe = () => {

    const name = "Ryan";
    const favFood = "Lasagne"
    const currentDate = new Date();
    const day = currentDate.getDay();

    const weekendCheck = () => {
        if (day === 0 || day === 6) {
        return "YEAH, THE WEEKEND IS HERE!!";
        } else if (day === 5) {
            return "In the words of The Cure, It's Friday, I'm in love"
        } else {
        return "Nope, still a weekday...";
        }
    }   

    // Anything that is in my return() will be returned by this component
    return(
        <>
            <h2>Hi, my name is {name}</h2>
            <h4>The way to my heart is {favFood}</h4>
            <h2>Is it the weekend yet?</h2>
            <h4>{weekendCheck()}</h4>
            <h6>N.B. Information correct as of {currentDate.toLocaleDateString()}</h6>
        </>
    )

};

export default AboutMe;