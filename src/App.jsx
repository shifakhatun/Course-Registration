import Cart from "./components/Courses/Cart";
import Courses from "./components/Courses/Courses";



  
function App() {


  return (
    <>
     <div className="p-4"> 
     <h1 className="text-3xl font-bold text-primary text-center">Course Registration</h1>
     </div>
     <div className="grid grid-cols-12">


<div className="col-span-10">  
   <Courses></Courses>
</div>
<div className="col-span-2">  
  <Cart></Cart>  
</div>

     </div>
    

 
      
    </>
  )
}

export default App;
