import React from 'react';
import { GenderType }from './selectGender'


interface Props{
  gender:GenderType,
}

export default function Face(props: Props){
  const imgUrl = (props.gender === GenderType.Male) ?
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Jack_Reacher-_Never_Go_Back_Japan_Premiere_Red_Carpet-_Tom_Cruise_%2835375035831%29.jpg/250px-Jack_Reacher-_Never_Go_Back_Japan_Premiere_Red_Carpet-_Tom_Cruise_%2835375035831%29.jpg' :
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Cameron_Diaz_WE_2012_Shankbone_4.JPG/250px-Cameron_Diaz_WE_2012_Shankbone_4.JPG';

  return <img src={imgUrl} />;
}
