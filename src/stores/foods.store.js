import { observable, action } from 'mobx';

export default class FoodsStore {
  @observable foods = [];

  constructor(foodsService) {
    this.foodsService = foodsService;
  }

  @action
  resetFoods() {
    this.foods = [];
  }

  @action
  async fetchFoods() {
    const result = await this.foodsService.fetchFoods();

    if (result) {
      this.tasks = result.data;
    }
  }

  @action
  async createFood(name, description, origin) {
    const result = await this.taskService.createFood(name, description, origin);
  }

  @action
  async updateFood(id, name, description, origin) {
    const food = this.foods.find(food => food.id === id);
    await this.tasksService.updateTaskStatus(id, name, description, origin);
    food.name = name;
    food.description = description;
    food.origin = origin;
  }

  @action
  async deleteFood(id) {
    const idx = this.foods.findIndex(food => food.id === id);
    await this.foodsService.deleteFood(id);
    this.foods.splice(idx, 1);
  }
}