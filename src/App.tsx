import ListGroup from './components/ListGroup.tsx';
import Alert from './components/Alert.tsx';
import './App.css'

function App() {
  const title = 'My List Group';
  let items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];

  const selectItem = (index: number) => {
    console.log(`Item ${index + 1} selected!`);
  }

  return <div className="container pt-5">
    <Alert>
      <h1>A simple info alert—check it out! 123</h1>
    </Alert>
    <ListGroup items={items} title={title}  onItemClick={selectItem} />
    <ListGroup items={items} title={title}  onItemClick={selectItem} />
  </div>;
}

export default App;
