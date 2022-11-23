import { goToHomePage, goToProfilePage, goToProdutosId } from "../Router/Coordinator"
import {useNavigate} from "react-router-dom"


function Header () {

const navigate = useNavigate()

    return (
        <div>
            <button onClick={() => goToHomePage(navigate)}>HomePage</button>
            <button onClick={() => goToProfilePage(navigate,"Fran")}>ProfilePage</button>
            <button onClick={() => goToProdutosId(navigate,"1")}>Produtos</button>
        </div>
    )


}

export default Header