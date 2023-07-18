import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ArticleTable = () => {
  const [cruds, setCruds] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/cruds/')
      .then(response => {
        const data = response.data;
        // console.log(data); // Add this line to check the value of data
        // if (Array.isArray(data)) {
          setCruds(data);
        // } else {
        //   console.error('Error fetching cruds: Invalid response');
        // }
      })
      .catch(error => {
        console.error('Error fetching cruds:', error);
      });
  }, []);

 
  const deleteCrud = (id) => {
    axios.delete(`http://localhost:8000/api/cruds/${id}`)
      .then(response => {
        setCruds(prevCruds => prevCruds.filter(crud => crud._id !== id));
      })
      .catch(error => {
        console.error('Error deleting crud:', error);
      });
  };

  return (
    <div className='overflow-x-scroll'>
      <h1 className="text-2xl font-bold mb-4">Article Table</h1>
      <table className="w-full bg-white border border-gray-200">
        <thead>
          <tr className=''>
            <th className="p-2 bg-amber-400 text-white border">Title</th>
            <th className="bg-amber-400 text-white border">Description</th>
            <th className="bg-amber-400 text-white border">Category</th>
            <th className="p-2 bg-amber-400 text-white border">Disponibilité</th>
            <th className="p-2 bg-amber-400 text-white border">État de l'objet</th>
            <th className="p-2 bg-amber-400 text-white border">Adresse</th>
            <th className="p-2 bg-amber-400 text-white border">Téléphone</th>
            <th className="p-2 bg-amber-400 text-white border">Image</th>
            <th className="p-2 bg-amber-400 text-white border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cruds?.current?.map(crud => {
           return  <tr className="hover:bg-gray-50" key={crud._id}>
              <td className="p-2 border">{crud.titre}</td>
              <td className="p-2 border">{crud.Description}</td>
              <td className="p-2 border">{crud.categorie}</td>
              <td className="p-2 border">{crud.Disponibilité}</td>
              <td className="p-2 border">{crud.etat_objet}</td>
              <td className="p-2 border">{crud.adresse}</td>
              <td className="p-2 border">{crud.telephone}</td>
              <td className="p-2 border">
                <img src={`http://localhost:8000/uploads/${crud.image}`} alt={crud.titre} className="h-8 w-8" />
              </td>
              <td className="p-2">
                <button
                  onClick={() => deleteCrud(crud._id)}
                  className="px-4 py-2 bg-amber-400 text-white rounded hover:bg-amber-400"
                >
                  Delete
                </button>
              </td>
            </tr>
})}
        </tbody>
      </table>
    </div>
  );
};

export default ArticleTable;
