const axios = require('axios');

class AzureConnector {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  // Méthode d'exemple pour obtenir des données
  async getData() {
    try {
      const response = await axios.get('https://api.azure.com/data', {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`
        }
      });
      return response.data;
    } catch (error) {
      console.error('Erreur dans la récupération des données Azure:', error);
      throw error;
    }
  }
}

module.exports = AzureConnector;
