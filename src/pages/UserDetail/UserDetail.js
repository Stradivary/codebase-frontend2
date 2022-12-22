import React from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () =>{
  // const params = useParams();
  // const userId = params.userId;
  const { userId } = useParams();
  return <div>Deskripsi Tentang User - {userId} </div>;
};

export default UserDetails;
