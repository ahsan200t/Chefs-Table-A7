/* eslint-disable react/prop-types */
const Cooking = ({cooking}) => {
    
    return (
        <div>
          <div>
          <h1 className="text-2xl font-semibold font-lexend text-center py-6">Currently Cooking: {cooking.length}</h1>
          <hr className="mb-3" />
          </div> 
          <div className="flex justify-around">
           <b>Name</b>
            <b>Time</b>
            <b>Calories</b>
           </div>
           <div>
           {cooking.map((item, index) => (
              <div key={item.id} className="flex justify-around items-center space-y-2 bg-gray-200 p-3">
                <p>{index+1}</p>
                <p>{item.name}</p>
                <p>{item.preparing_time}</p>
                <p>{item.calories}</p>
                
              </div>
              
            ))}
           </div>
           <div className="flex gap-5 pt-3">
            <p><b>Total Time</b> = 
             <span>
                {
                  cooking.reduce((p, c) => p + c.preparing_time, 0)
                }</span> minutes</p>
             <p>
             <b>Total Calories</b> = 
            <span>
                {
                    cooking.reduce((p, c) => p + c.calories, 0)
                }</span> calories
             </p>

           </div>
        </div>
    );
};

export default Cooking;