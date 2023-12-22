import { ExclamationTriangleIcon } from "@heroicons/react/24/solid"
import { Link } from "react-router-dom"

const Error = () => {
  return (
    <section className="error-con">
        <div className="error">
            <ExclamationTriangleIcon className="error-icon" />
            <h2>Error occur in your application.</h2>
            <Link to="/"><p>GO BACK</p></Link>
        </div>
    </section>
  )
}

export default Error