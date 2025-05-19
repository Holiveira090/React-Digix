import PropTypes from 'prop-types' // importar isso para poder Tipar a Props

function Item({ marca, ano_lancamento }) {
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

// Adicionando a tipagem nas variaveis
Item.propTypes = {
    marca: PropTypes.string.isRequired, // isRequired para ser obrigado a atribuir algum valor
    ano_lancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: 'faltou a marca',
    ano_lancamento: 0,
}

export default Item