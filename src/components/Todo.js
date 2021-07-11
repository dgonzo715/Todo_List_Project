const Todo = () => {
    
    const listItems = (
      <>
        <h1>Things I need to do:</h1>
        <ul>
            <li>Learn React!</li>
            <li>Become a web developer!</li>
            <li>Travel to New York!</li>
            <li>Work on painting and drawings!</li>
        </ul>
      </>
    );
    
  
    return (
      <>
        <h1>
            Hello Dojo!
       </h1>
       
        {listItems}
       
      </>  
    );
  };
  
  export default Todo;