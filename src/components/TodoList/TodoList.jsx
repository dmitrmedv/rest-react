const ToDolist = ({ data, deleteTodo }) => {
  return (
    <ul>
      {data.map(({ id, name, adress, discription }) => (
        <li key={id}>
          {/* <p>Адреса: {adress}</p> */}
          <p>заявник: {name}</p>
          {/* <p>суть питання: {discription}</p> */}
          <button
            type="button"
            onClick={() => {
              deleteTodo(id);
            }}
          >
            видалити
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ToDolist;
