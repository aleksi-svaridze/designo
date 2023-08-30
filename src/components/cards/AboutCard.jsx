

const AboutCard = ({id, img, title, desc}) => {
    return(
        <div className="col-12 col-xl-4" key={id}>
            <div className="d-flex flex-column flex-md-row flex-xl-column align-items-center about-card">

                <img src={img} alt={title} className="mb-xl-5 mb-5 mb-md-0 about-card--img" />

                <div className="text-center text-md-start text-xl-center ms-md-5 ms-0 ms-xl-0">
                    <h3 className="mb-4 pb-2 about-card--title fw-medium text-gray-dark">{title}</h3>
                    <p className="about-card--desc text-gray-dark fw-normal m-0">{desc}</p>
                </div>

            </div>
        </div>
    )
}

export default AboutCard;