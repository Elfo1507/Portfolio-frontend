interface iCard{
    name: string
    lang: string
    link: string
}

export function Card({name, lang, link}: iCard){
 
    return(<li>
        <div>
            <h3>{name}</h3>
            <p>{lang}</p>
        </div>
        <a href={link}>Repo</a>
    </li>)
}