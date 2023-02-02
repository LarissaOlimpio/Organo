import { useState } from 'react';
import Banner from './componentes/Banner';
import Form from './componentes/Form';
import Time from './componentes/Time';
import { ICollaborators } from './shared/interfaces/ICollaborators';

function App() {

  const times = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    }
  ]

  const [collaborators, setCollaborators] = useState([])

  const newCollaboratorAdd = (colaborator: ICollaborators) => {
    debugger
    //setCollaborators([...collaborators, collaborator])
  }

  return (
    <div className="App">

      <Banner 
      srcImage="/assets/banner.png"
      altText="Banner Image"
      />

      <Form times={times.map(time => time.name)} registeredCollaborator={colaborador => newCollaboratorAdd(colaborador)}/>

      {times.map(time => <Time 
        key={time.name} 
        name={time.name} 
        primaryColor={time.primaryColor} 
        secondaryColor={time.secondaryColor} 
        collaborators={collaborators.filter(collaborator => collaborator.time === time.name)}
      />)}   

    </div>
  );
}

export default App;
