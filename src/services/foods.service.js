import BaseHttpService from './base-http.service';

export default class FoodsService extends BaseHttpService {
  fetchFoods() {
    return this.get('foods');
  }

  createFood(name, description, origin) {
    return this.post('foods', { name, description, origin });
  }

  updateFood(id, name, description, origin) {
    return this.put(`foods/${id}`, { name, description, origin });
  }

  async deleteFood(id) {
    return await this.delete(`foods/${id}`);
  }
}