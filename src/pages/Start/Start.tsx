import { useState } from 'react';
import Form from '../../componentes/Form';
import Time from '../../componentes/Time';
import { ICollaborators } from '../../shared/interfaces/ICollaborators';
import{ v4 as uuidv4} from 'uuid';

function Start() {

  const [times] = useState([
    {
      id: uuidv4(),
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      id: uuidv4(),
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      id: uuidv4(),
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      id: uuidv4(),
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      id: uuidv4(),
      name: 'UX e Design',
      primaryColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      id: uuidv4(),
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      id: uuidv4(),
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    }
  ])
  const [collaborators, setCollaborators] = useState<ICollaborators[]>([])
  

const newCollaboratorAdd = (collaborator: ICollaborators) => {
    setCollaborators([...collaborators, collaborator])
  }


  return (
    <div className="App">

      <Form 
        times={times.map(time => time.name)} 
        registeredCollaborator={collaborator => newCollaboratorAdd(collaborator)}/>

      {times.map(time => <Time 
        key={time.id} 
        name={time.name} 
        primaryColor={time.primaryColor} 
        secondaryColor={time.secondaryColor} 
        collaborators={collaborators.filter(collaborator => collaborator.time === time.name)}
      />
      )}   

    </div>
  );
}

export default Start;
