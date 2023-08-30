

const Circles = ({styles, degree, startColor, startColorOpacity, endColor, endColorOpacity}) => {
    return(
        <div 
            className={`${styles}`} 
            style={{backgroundImage: `linear-gradient(${degree}, ${startColor} ${startColorOpacity}, ${endColor} ${endColorOpacity})`}}></div>
    )
}

export default Circles;