import { useState } from "react";

const PrintMyName = () => {
  const [name, setName] = useState("임성민");
  return <p>{name}</p>

}

export default PrintMyName;