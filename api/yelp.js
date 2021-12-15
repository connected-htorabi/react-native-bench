import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer wfBDbE1YeQK-3rUx_OxE3I1CiDsT7_zFGepcPJMrkJ5v5Uh91kvERqXoe1VGmbRZke_4RgIG3ILTruhz7uCHVlbqKZawvmXZW3PGBmYLiSyIaPVnZy5O-opdfOibYXYx',
    },
});
