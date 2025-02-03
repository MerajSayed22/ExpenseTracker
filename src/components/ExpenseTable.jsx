import React from 'react'
import ExpenseForm from './ExpenseForm'

function ExpenseTable({expense}) {

    const totalAmount = expense.reduce((sum, item) => sum + Number(item.amount), 0);

    return (
        <div className="tables">

            <table className="table-auto border-collapse border border-gray-300 w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-400 px-4 py-2">Item</th>
                        <th className="border border-gray-400 px-4 py-2">Category</th>
                        <th className="border border-gray-400 px-4 py-2"> Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    expense.map(({ id, title, category, amount }) => (

                        
                        <tr key={crypto.randomUUID()}>
                            <td className="border border-gray-400 px-4 py-2">{title}</td>
                            <td className="border border-gray-400 px-4 py-2">{category}</td>
                            <td className="border border-gray-400 px-4 py-2">₹{Math.abs(amount)}</td>
                        </tr>

                        
                    ))}


                    <tr className="bg-gray-100">
                        <td className="border border-gray-400 px-4 py-2">Total</td>
                        <td className="border border-gray-400 px-4 py-2"></td>
                        <td className="border border-gray-400 px-4 py-2">&#8377;{Math.abs(totalAmount)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ExpenseTable