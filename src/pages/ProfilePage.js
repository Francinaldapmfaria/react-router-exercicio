import { useParams } from "react-router-dom";


function ProfilePage() {
  const {name} = useParams() //desetruturado 
  //ou pode fazer const pathParams=useParams() ai la em baixo ao inves de so name tem que chamar {pathParams.id}

  return (
    <section>
      <h1>Página de perfil {name}</h1>
    </section>
  );
}

export default ProfilePage;
