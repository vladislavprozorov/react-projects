function PetInfo({ pet, age, hasPet }) {
  return hasPet 
  ? <h1>{`My ${pet} is ${age} old`}</h1>
  : <h2>I dont have a pet</h2>
}
export default PetInfo;
