import { useRouteError } from "react-router-dom";

export const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1> OOOOPPPSSS!!!!! </h1>
      <h4> Something Went Wrong! </h4>
      <h3>
        {" "}
        {err.status} : {err.statusText}{" "}
      </h3>
    </div>
  );
};

// export default Error
