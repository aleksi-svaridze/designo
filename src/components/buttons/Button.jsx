

const Button = ({content, path, btnStyle}) => {
    return (
        <a href={path} className={`${btnStyle} d-flex align-items-center justify-content-center fw-medium text-uppercase text-decoration-none`}>
            {content}
        </a>
    )
}

export default Button;