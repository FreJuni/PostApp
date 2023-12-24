import { ExclamationTriangleIcon } from "@heroicons/react/24/solid"
import { Link,useRouteError } from "react-router-dom"

const Error = () => {
  const error = useRouteError();

  let Error = "Error occur in your application.";

  if(error.data.message) {
    Error = error.data.message;
  }


  return (
    <section className="error-con">
        <div className="error">
            <ExclamationTriangleIcon className="error-icon" />
            <h2>{Error}</h2>
            <Link to="/"><p>GO BACK</p></Link>
        </div>
    </section>
  )
}

export default Error