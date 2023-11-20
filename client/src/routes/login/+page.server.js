import axios from 'axios';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		console.log(formData);
		// const email = data.get('email');
		// const password = data.get('password');

		// const user = await axios.post('http://127.0.0.1:3000/api/users', {
        //     email,
        //     password
        // });


		return { success: true };
	}
};