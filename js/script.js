function delay(ms, data) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(data)
		}, ms)
	})
}

async function getUserInfo() {
	let userInfo = {name: 'Vic', age: 21, id: 1};
	return await delay(1000, userInfo);
};

async function getUserAvatar(userInfo) {
	userInfo.avatar = 'https://previews.123rf.com/images/stockgiu/stockgiu1708/stockgiu170802061/83728179-avatar-sketch-of-a-funny-man-s-haed-with-sunglasses-and-hairstyle-design.jpg';
	return await delay(1000, userInfo);
};

async function getUserAdditionalInfo(userInfo) {
	userInfo.interests = ['sport', 'books'];
	return await delay(1000, userInfo);
}

async function getResult() {
	let userInfo = await getUserInfo();
	let userAvatar = await getUserAvatar(userInfo);
	let result = await getUserAdditionalInfo(userAvatar);
	console.log(result);
}

getResult();

async function getUser() {
   return { name: 'Vic', age: 21, id: 1 };
}

async function getInfo() {
   try{
		let user = await getUser();
   	throw new Error('error');
	} catch (err) {
		console.warn(err);
	}
}
 
getInfo();
