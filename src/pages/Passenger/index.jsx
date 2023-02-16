import { async } from '@firebase/util';
import { collection, doc, getDocs } from 'firebase/firestore';
import React, {useEffect, useReducer, useState} from 'react';
import {db} from '../../firebase'



  const Passenger = () => {
    const [docs, setDocs] = useState([]);
  
    useEffect(() => {
      const unsubscribe = db.collection('collection_1').onSnapshot((snapshot) => {
        const documents = [];
        snapshot.forEach((doc) => {
          documents.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setDocs(documents);
      });
      return () => unsubscribe();
    }, []);
  
    return (
      <ul>
        {docs.map((doc) => (
          <li key={doc.id}>{doc.nome}</li>
        ))}
      </ul>
    );
  };
  export default Passenger;