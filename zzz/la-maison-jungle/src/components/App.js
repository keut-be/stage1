import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthGuard from "../api/AuthGuard";
import JungRouter from './JungRouter';
import AuthRouter from '../registre/AuthRouter';


function App() {

	return (
		<div>
			<BrowserRouter>
				<Routes>
				<Route path="/*" element={
					<AuthGuard>
						<JungRouter />
					</AuthGuard>
				} />
				<Route path="/auth/*" element={<AuthRouter />} />
				</Routes>
			</BrowserRouter>
   		</div>
	)
}
export default App;
