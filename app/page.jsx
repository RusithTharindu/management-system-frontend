"use client"

import { useState ,useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const getClients = () => {
      axios.get("http://localhost:8070/client/").then((res) => {
        setClients(res.data);
      }).catch((err) => {
        alert(err);
      })
    }
    getClients();
  }, [])


  return(
    <div>
      <p>Clients list</p>
      {clients.map((client) => (
        <li key={client.id}>
          <p>{client.name}</p>
          <p>{client.company}</p>
          <p>{client.email}</p>
        </li>
      ))}
    </div>
  )
}

export default Home;

// "use client"

// import Image from "next/image";
// import useClients from "./store.js"
// import { useEffect } from "react";
// import axios from "axios";

// const Home = () => {

//   const setClients = useClients((state) => state.setClients);
//   const clients = useClients((state) => state.clients);

//   useEffect(() => {
//     const getClients = () => {
//       axios.get("https://management-system-backend-gamma.vercel.app/").then((res) => {
//         setClients(res.data);
//       }).catch((err) => {
//         alert(err);
//       });
//     };
//     getClients();
//   }, [setClients]);

//   return (
//     <div>
//       hello hi
//     </div>
//   );
// }

// export default Home;

