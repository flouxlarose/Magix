export default function Index() {
  const handleSubmit = evt => {
		evt.preventDefault();

		// Appeler un API pour ajouter notre vêtement
		let formData = new FormData();
		formData.append("quantite", data.qty);
		formData.append("nom", data.name);

		fetch("/api/products-add.php", {
			method: 'POST',
			body: formData,
		})
		.then(response => response.json())
		.then(result => {
			if (result == "OK") {
				setShowSuccessMessage(true);
				setData({
					qty : 1,
					name : ""
				})				
			}
		})
	}

  	return  <SiteLayout title="Sign in">
        		<h1>Connectez-vous</h1>
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
							onChange={evt => { setData({...data, name : evt.target.value}) }}
							/>
					</div>
					<div>
						<Button>Ajouter</Button>
					</div>
				</form>
          	</SiteLayout>
}
