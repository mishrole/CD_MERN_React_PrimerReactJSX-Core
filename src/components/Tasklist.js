import React from 'react';

export const Tasklist = () => {

  const tasks = [
    "Learn React",
    "Climb Mt. Everest",
    "Run a marathon",
    "Feed the dogs"
  ];

  return (
    <>
      <ul>
        {
          tasks.map(item => {
            return (
              <li>{item}</li>
            )
          })
        }
      </ul>
    </>
  )
}