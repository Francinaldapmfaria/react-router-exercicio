

export const goToHomePage = (navigate) => {
    navigate('/')
}
export const goToProfilePage = (navigate, nome) => {
    navigate(`/profile/${nome}`)
}

export const goToProdutosId = (navigate, id) => {
    navigate(`/produto/${id}`)
}