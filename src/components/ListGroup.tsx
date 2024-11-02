// import { Fragment } from 'react';
import { MouseEvent, useState  } from 'react';

interface Props {
  items: string[];
  title: string;
  onItemClick: (index: number) => void;
}

function ListGroup(props: Props) {
  const message = props.items.length === 0 ? <p>No items found.</p> : null;
  const [ selectedIndex, setSelectedIndex ] = useState(0);

  // if (items.length === 0) {
  //   return <p>No items found.</p>;
  // }

  const getMessage = () => {
    return props.items.length === 0 ? <p>No items found.</p> : null;
  }


  // Event handler
  // const handleClick = (event: MouseEvent) => {
  //   console.log('Item clicked:', event.target);
  // }

  const handleClick = (index: number) => {
    console.log(index)
  }

  return (
    <>
      <h1>{ props.title }</h1>
      { props.items.length === 0 && <p>No items found.</p> }
      <ul className="list-group">
        {
          props.items.map((item, index) => (
            <li onClick={ () =>  {
              setSelectedIndex(index);
              props.onItemClick(index);
            }}
                key={ index }
                className={ selectedIndex === index ? 'active list-group-item' : 'list-group-item' }
            >
              { item }
            </li>
          ))
        }
      </ul>
    </>
  );
}

export default ListGroup;
