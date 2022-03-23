export const dec = () => ({type:'DEC'});
export const rnd = (value) => ({type:'RND',  payload: Math.floor(Math.random() * 10)});
export const inc = () => ({type:'INC'});