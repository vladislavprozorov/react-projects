import persons from '../data/persons';
import Person from './Person';
function Persons() {
  return (
    <div className="cards">
      {persons.map((person) => {
        return <Person key={person.id} {...person}></Person>;
      })}
    </div>
  );
}
export default Persons;
