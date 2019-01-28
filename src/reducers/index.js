

const initialState = {
	user: 'testUser',
	roomName: 'testRoomName',
	isUser: true,
};

export default (state = initialState, action) =>{
	let newState = {...state};
	switch(action.type){
		default:
		return state;
	}
}