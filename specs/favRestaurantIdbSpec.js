import { itActsAsFavoriteRestoModel } from './contract/favRestaurantContract';
import FavoriteRestoIdb from '../src/scripts/data/favoriteresto-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoIdb.getAllRestos()).forEach(async (resto) => {
      await FavoriteRestoIdb.deleteResto(resto.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteRestoIdb);
});
