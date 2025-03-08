import List from './List.jsx';

function App(){

  const fruits = [{id: 1, name: "Apple", calories: 95},
                  {id: 2, name: "Orange", calories: 45}, 
                  {id: 3, name: "Banana", calories: 105}, 
                  {id: 4, name: "Coconut", calories: 65}, 
                  {id: 5, name: "Pineapple", calories: 37}];

const vegetables = [{id: 7, name: "potatoes", calories: 105},
                    {id: 8, name: "celery", calories: 15}, 
                    {id: 9, name: "carrots", calories: 35}, 
                    {id: 10, name: "corn", calories: 25}, 
                    {id: 11, name: "tomato", calories: 47}];
  

  return(<>
            {fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
            {fruits.length > 0 ? <List items={vegetables} category="Vegetables"/>: null}
            </>
            );
}

export default App;