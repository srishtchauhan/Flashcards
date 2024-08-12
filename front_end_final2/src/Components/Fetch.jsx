import React from 'react';
import Show from './show';
import Form from './form';

function Fetch() {
  const [todo, setTodo] = React.useState([]);

  async function abc() {
    try {
      const resp = await fetch('https://flashcards-id03.onrender.com/getData');
      const myData = await resp.json();
      console.log('Fetched todos:', myData); // Debug log
      setTodo(myData);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  }

  React.useEffect(() => {
    abc();
  }, []);

  const data_ = todo.map((data) => (
    <Show
      title={data.title}
      description={data.description}
      key={data.id} // Ensure key is unique and consistent
      keyVal={data.id} // Use the actual id from the fetched data
      refreshTodos={abc} // Refresh the list after delete or edit
    />
  ));

  return (
    <div>
      <Form refreshTodos={abc} />
      {data_}
    </div>
  );
}

export default Fetch;
