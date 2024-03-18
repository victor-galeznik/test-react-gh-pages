import { useState } from 'react';
import Costs from './components/Costs/Costs';
import NewCost from './components/NewCost/NewCost';

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2024, 2, 12),
    description: 'Honda Civic',
    amount: 5000,
  },
  {
    id: 'c2',
    date: new Date(2024, 4, 14),
    description: 'Headphones',
    amount: 1000,
  },
  {
    id: 'c3',
    date: new Date(2022, 5, 22),
    description: 'PC',
    amount: 1300,
  },
  {
    id: 'c4',
    date: new Date(2021, 5, 22),
    description: 'Bike',
    amount: 1300,
  },
];

export default function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </>
  );
}
