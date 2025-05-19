import Item from "./Item"

function List() {
    return (
        // Para não criar mais uma div, basta deixar vazio dessa maneira: <>
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1985} />
                <Item marca="Bugatti" ano_lancamento={1964} />
                <Item marca="Fiat" ano_lancamento={1977} />
                <Item />
            </ul>
        </>
    )
}

export default List