export const load = async ({ parent }) => {
	const user = await parent()
	console.log(user, 'from /profile');
    return {
		user
	}
}
