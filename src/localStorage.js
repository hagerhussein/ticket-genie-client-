const persistData = store => next => action => {
  next(action);
  localStorage['authUser'] = JSON.stringify(store.getState());
  console.log('Local Storage:', localStorage['authuser']);
}

export default persistData
  
  