import { types, flow } from 'mobx-state-tree';

export const SingleImage = types.model('SingleImage', {
  title: types.string,
  url: types.string
});

export const Store = types
  .model('Store', {
    list: types.frozen([])
  })
  .actions(self => {
    const getImages = flow(function* getImages() {
      try {
        const newStuff = yield fetch(`/api/images`);
        const data = yield newStuff.json();
        self.list = data;
      } catch (err) {
        console.log(err);
      }
    });
    return {
      getImages
    };
  });
