export const getImage = (imgUrl, restaurant_id, split) => {
  let a = split.split('/');

  return `https://images.foody.vn/res/${a[4]}/${restaurant_id}/prof/s640x400/${imgUrl}`;
};

export const getImageSelling = (imgUrl, restaurant_id, split) => {
  //let a = split.split('/');
  console.log('chuoi :', split);
  //return `https://images.foody.vn/res/${a[4]}/${restaurant_id}/prof/s640x400/${imgUrl}`;
};
