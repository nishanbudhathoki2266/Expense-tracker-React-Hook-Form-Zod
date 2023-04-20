import { useState } from "react"
import ExpenseList from "./components/ExpenseList"
import ExpenseFilter from "./components/ExpenseFilter"
import ExpenseForm from "./components/ExpenseForm";

const App = () => {

  const [selectedCategory, setSelectedCategory] = useState('');
  const [expenses, setExpenses] = useState([{ id: 1, description: 'Suit', amount: 5000, category: 'Groceries' },
  { id: 2, description: 'Toyota Hylux', amount: 20000, category: 'Vehicles' },
  { id: 3, description: 'Ps5', amount: 5500, category: 'Entertainment' },])


  const handleOnDelete = (id: number) => {
    const updatedExpenses = expenses.filter(expense => expense.id !== id)
    setExpenses(updatedExpenses);
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  }

  const filteredExpenses = selectedCategory ? expenses.filter(expense => expense.category === selectedCategory) : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm onSubmit={(expense) => setExpenses([...expenses, { ...expense, id: expenses.length + 2 }])} />
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={handleCategoryChange} />
      </div>
      <ExpenseList expenses={filteredExpenses} onDelete={handleOnDelete} />
    </div>
  )
}
export default App



// on click => setCart({...cart, items: [...cart.items,  ]})



