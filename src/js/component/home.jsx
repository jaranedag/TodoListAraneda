import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState ("");
	const [tareas,setTareas] = useState(["Lavar la loza","Pasear al Perro","Pagar las cuentas"]);
	return (
	       <div className="container">
			 <h1>Mi lista de Tareas </h1>
                 <ul>
					<li><input type="text"
                      onChange={(e)=> setInputValue(e.target.value)}
					  value={inputValue}
					  onKeyPress={(e) => { 
						 if(e.key  === "Enter") {
							 setTareas(tareas.concat(inputValue));
							 setInputValue("");
							  }
						  }}
					 placeholder="Que necesitas hacer?" /></li>
					 {tareas.map((t,i)=> ( 
						<li> 
							{t}<i  className="fas fa-times text-danger" onClick={()=> 
								setTareas(
									tareas.filter(
										(t,index)=>
										i != index
										)
									 )}></i>
						</li>
					  ))}
				
				</ul>
				<div className="footer text-center ">{tareas.length} Tareas</div>
		   </div>
	);
};

export default Home;
