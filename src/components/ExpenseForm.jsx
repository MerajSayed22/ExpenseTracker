import ExpenseTable from "./ExpenseTable"

function ExpenseForm({setExpense}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Get form data
        const newExpense = getFormData(e.target);
    
        // Ensure that all fields are filled before updating state
        if (!newExpense.title || !newExpense.category || !newExpense.amount) {
            alert("Please fill in all fields before adding an expense.");
            return;
        }
    
        // Update state correctly
        setExpense((prevState) => [...prevState, newExpense]);
    
        // Reset form
        e.target.reset();
    };
    

    const getFormData = (form) => {

        const formData = new FormData(form);


        const data = {}

        for (const [key,value] of formData.entries()){
            data[key] = value;
        
            
        }
        return data;  

    
    
       

    }




  return (
    <form onSubmit={handleSubmit}>
          <div className="form flex flex-col gap-4 w-96 m-4">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name='title' className="border border-gray-300 p-2 rounded outline-none"  />

            <label htmlFor="category">Category</label>
            <select id="category" name='category' className="border border-gray-300 p-2 rounded outline-none" >

               <option></option>
                <option value="HomeExpense">Home Expense</option>
                <option value="Groceries">Groceries</option>
                <option value="Clothes">Clothes</option>
                <option value="Electronics">Electronics</option>
                <option value="MobileRecharge">Mobile Recharge</option>
                <option value="Food">Food</option>
                <option value="Outing">Outing</option>
                <option value="Education">Education</option>
                <option value="Entertaiment">Entertaiment</option>
                <option value="Rent">Rent</option>
                <option value="MedicalBills">Medical Bills</option>
                <option value="UtilityBills">Utility Bills</option>
                <option value="VehicleLoan">Vehicle Loan</option>
                <option value="BankLoan">Bank Loan</option>
                <option value="Bissi">Bissi</option>
                <option value="BorroweredMoney">Borrowered Money from last month</option>
                <option value="OTTSubcriptions">OTT Subcriptions</option>
                <option value="Others">Others...</option>
            </select>
            
          
            
            <label htmlFor="amount">Amount</label>
            <div className="rupee flex">
            <div className="border border-gray-300 p-2 rounded-l outline-none text-white bg-green-800 text-2xl">&#8377;</div>
            <input type="text" id="amount" name='amount' className="border border-gray-300 p-2 rounded-e-md outline-none" pattern="\d*" inputmode="numeric"/>
            </div>

            <button type="submit" className="border mt-4 rounded border-gray-300 p-2 outline-none bg-green-800 text-white text-xl">Add</button>
          </div>
          </form>

          
  )
}

export default ExpenseForm