const axios = require('axios');

class GoogleCloudConnector {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  // Méthode d'exemple pour obtenir des données
  async getData() {
    try {
      const response = await axios.get('https://api.googlecloud.com/data', {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Erreur dans la récupération des données Google Cloud:', error);
      throw error;
    }
  }
}

module.exports = GoogleCloudConnector;
