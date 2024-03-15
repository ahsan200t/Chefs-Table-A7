/* eslint-disable react/prop-types */
const Cart = ({ cart }) => {
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
          {cart.map(item => (
              <tr key={item.id} className="flex justify-around">
                <td>{item.name}</td>
                <td>{item.preparing_time}</td>
                <td>{item.calories}</td>
               
              </tr>
              
            ))}
          </div>
         </div>
         
          
           
          
        
      </div>
    </div>
  );
};

export default Cart;
