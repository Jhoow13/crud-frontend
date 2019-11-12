import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import "./styles.css";

export default function Dashboard() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    async function loadClients() {
      const response = await await api.get("/cliente");

      setClients(response.data);
    }

    loadClients();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>email</th>
            <th>Valor</th>
            <th>Verdadeiro</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client._id}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.number}</td>
              <td>
                <input type="checkbox" defaultChecked={client.value} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/new">
        <button className="btn">Cadastrar novo cliente</button>
      </Link>
    </div>
  );
}