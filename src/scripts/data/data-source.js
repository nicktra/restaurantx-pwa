import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class DataSource {
  static async listResto() {
    try {
      const response = await fetch(API_ENDPOINT.CATALOUGE);
      if (response.status !== 200) {
        return response.status;
      }
      return response.json();
    } catch (error) {
      return error;
    }
  }

  static async detailResto(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      if (response.status !== 200) {
        return response.status;
      }
      return response.json();
    } catch (error) {
      return error;
    }
  }

  static async createReview(data) {
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY,
      },
      body: JSON.stringify(data),
    });
    return response;
  }
}

export default DataSource;
