/* eslint-disable react/prop-types */
const Cart = ({ cart, handleRemove, handleCooking }) => {
  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold font-lexend text-center pt-8 pb-4">
          Want to cook: {cart.length}
        </h1>
        <hr />
      </div>
      <div>
      
         
           
           <div className="flex justify-around">
           <b>Name</b>
            <b>Time</b>
            <b>Calories</b>
           </div>
           
         <div>
         <div>
          {cart.map((item, index) => (
              <tr key={item.id} className="flex justify-around items-center space-y-2 bg-gray-200 p-3">
                <p>{index+1}</p>
                <td>{item.name}</td>
                <td>{item.preparing_time}</td>
                <td>{item.calories}</td>
                <button onClick={()=> handleRemove(item.id, handleCooking(item))
                  } className="p-2 bg-[#0BE58A] rounded-full font-medium">Preparing</button>
               
              </tr>
              
            ))}
          </div>
         </div>
         
          
           
          
        
      </div>
    </div>
  );
};

export default Cart;
