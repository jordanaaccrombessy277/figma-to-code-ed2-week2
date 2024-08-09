
export const MenuFooter = ({title, list}) => {
    return (
        <div className="flex flex-col gap-2">
            <p className="font-archivo font-medium text-base">{title}</p>
            <ul className="flex flex-col gap-0.5">
                {
                    list.map((element, index) => (
                      <li key={index} className=''><a href="/" className="text-sm font-archivo text-gray-light">{element}</a></li>
                    ))
                }
            </ul>
        </div>
    )
}