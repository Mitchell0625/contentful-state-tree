import { types, flow } from 'mobx-state-tree';

export const SingleImage = types.model('SingleImage', {
  title: types.string,
  url: types.string
});

export const Store = types
  .model('Store', {
    list: types.array(SingleImage)
  })
  .actions(self => {
    const getImages = flow(function* getImages() {
      try {
        const newStuff = yield fetch(`api/images`);
        console.log(newStuff.json());
        self.list.push(newStuff);
      } catch (err) {
        console.log(err);
      }
    });
    return {
      getImages
    };
  });
