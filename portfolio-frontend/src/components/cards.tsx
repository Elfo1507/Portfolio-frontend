interface iCard{
    name: string
    lang: string
    link: string
}

export function Card({name, lang, link}: iCard){
 
    return(<li>
        <h3>{name}</h3>
        <a href={link}>Repo</a>
    </li>)
}