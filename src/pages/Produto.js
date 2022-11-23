import { useParams } from "react-router-dom";
import Header from "../components/Header";


function ProdutoId() {
  const {id} = useParams()

  return (
    <section>
      <h1>Página do produto {id} </h1>
      <Header/>
    </section>
  );
}

export default ProdutoId;