
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';

function App() {

  const itemNewName = "SurfExel"

  const response = [
    {
      itemName : 'Nirma',
      itemDate : '20',
      itemMonth : 'June',
      itemYear : '1998'
    },
    {
      itemName : 'Nirma2',
      itemDate : '202',
      itemMonth : 'June2',
      itemYear : '19982'
    },
    {
      itemName : 'Nirma3',
      itemDate : '203',
      itemMonth : 'June3',
      itemYear : '19983'
    }
  ];
    


  return (

    <div>

      <Card>

        <Item name='Nirma'>
          Me hu aapki first Item..
        </Item>
        <ItemDate day='20' month = 'June' year = '1998'></ItemDate>

        <Item name={itemNewName}></Item>
        <ItemDate day='22' month = 'Augest' year = '2000'></ItemDate>

        <Item name={response[2].itemName}></Item>
        <ItemDate day={response[2].itemDate} month = {response[2].itemMonth} year = {response[2].itemYear}></ItemDate>

      </Card>

      

      <div className="App">
        Hello JEE
      </div>

    </div>
  );
}

export default App;
