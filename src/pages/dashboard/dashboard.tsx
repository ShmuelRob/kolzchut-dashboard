import KibanaDashboard from "../../components/kibanaDashboard.tsx";
import { generateSrc } from "./generateKey.ts";

const Dashboard = () => {
	const src = generateSrc();
	return (
		<>
			<KibanaDashboard {...{ src }} />
		</>
	);
};

export default Dashboard;
