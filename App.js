import { useState } from "react";
import Template from "./Pages/Template";
import { useSelector } from "react-redux";
import Home from "./Pages/Home";
import "./CSS/Template.css";
function App() {
	const [sidebarIsOpen, setSidebarOpen] = useState(true);
	const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
	let select = useSelector((state) => state?.login?.tasks);
	// console.log(select);
	return (
		<>
			{select?.length > 0 && (select[0].empRoleName==='Manager'||select[0].empRoleName==='Resource Manager'||select[0].empRoleName==='PMO Analyst'||select[0].empRoleName==='Higher Management'||select[0].empRoleName==='Management'||select[0].empRoleName==='HR Manager'||select[0].empRoleName==='HR Employee'||select[0].empRoleName==='Accountant')? (
				<Template toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
			) : (
				<Home />
			)}
		</>
	);
}

export default App;
