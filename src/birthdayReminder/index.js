import React, { useState } from 'react';
import data from './data';
import './BirthdayReminder.scss';

export default function BirthdayReminder() {
  const [people, setPeople] = useState(data);
  const defaultPeople = people;

  const removePerson = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <section className="container">
      <div className="birthday">
        <h3>{people.length} birthdays today</h3>
        {people.map((person) => {
          const { id, name, age, image } = person;
          return (
            <div key={id} className="person">
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
              <button onClick={() => removePerson(id)}>Dismiss</button>
            </div>
          );
        })}
        <button onClick={() => setPeople([])}>Clear all</button>
      </div>
    </section>
  );
}
