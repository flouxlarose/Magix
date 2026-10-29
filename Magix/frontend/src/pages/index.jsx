import { useState } from 'react';
import SiteLayout from '../layouts/site-layout';
import Button from '../components/button';

export default function Index() {
	const [ShowSuccessMessage, setShowSuccessMessage] = useState(false);	
	const [ShowErrorMessage, setShowErrorMessage] = useState(false);
	const [data, setData] = useState({
		username : "",
		password : "",
	})

	const handleSubmit = evt => {
		evt.preventDefault();

		// Appeler un API
		let formData = new FormData();
		formData.append("username", data.username);
		formData.append("password", data.password);

		fetch("/api/sign-in.php", {
			method: 'POST',
			body: formData,
		})
		.then(response => response.json())
		.then(result => {
			if (result == "OK") {
				setShowSuccessMessage(true);
				setData({
					username : "",
					password : "",
				})				
			}
			else if (result == "INVALID_USERNAME_PASSWORD"){
				setShowErrorMessage(true);
				setData({
					username : "",
					password : "",
				})	
			}
		})
	}

  	return  <SiteLayout title="Sign in">
        		<h1>Connectez-vous</h1>
				{
					ShowSuccessMessage ?
					<div className='bg-green-300 text-green-700 p-1 border my-2'> 
						Vous êtes connecté !
					</div>
					:
						null
				}
				{
					ShowErrorMessage ?
					<div className='bg-red-300 text-green-700 p-1 border my-2'> 
						Erreur de connection
					</div>
					:
						null
				}
				<form onSubmit={handleSubmit} className='bg-white border p-1 rounded'>
					<div>
						Username :
						<input 
							type="text" 
							name="username" 
							value={data.username} 
							required={true}
							onChange={evt => { setData({...data, username : evt.target.value}) }}
							/>
					</div>
					<div className='mt-1'>
						Password :
						<input 
							type="password" 
							name="password" 
							value={data.password} 
							required={true}
							onChange={evt => { setData({...data, password : evt.target.value}) }}
							/>
					</div>
					<div>
						<Button>Sign-In</Button>
					</div>
				</form>
          	</SiteLayout>
}
