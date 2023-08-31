

const SocIcons = ({wrapperStyles, data, iconStyles }) => {
    return(
        <div className={wrapperStyles}>
            {data.map(item => (
                <a href={item.path} key={item.id}>
                    <item.icon className={iconStyles} />
                </a>
            ))}
        </div>
    )
}

export default SocIcons;