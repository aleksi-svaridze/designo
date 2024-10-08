export const ButtonPeach = ({title}) => {
    return(
        <button className="text-white hover:bg-light-peach h-14 rounded-lg bg-peach text-[15px] font-medium uppercase tracking-[1px] px-6">
        {title}
      </button>
    )
}

export const ButtonWhite = ({title}) => {
    return(
        <button className="hover:text-white hover:bg-light-peach h-14 rounded-lg bg-white text-[15px] font-medium uppercase tracking-[1px] px-6">
        {title}
      </button>
    )
}