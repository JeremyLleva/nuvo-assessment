import axios from 'axios';

export class utils{
    async getInformation(){
        let response = await axios.get('https://fakestoreapi.com/products?limit=5').then(function(response){console.log(response)})
        return response
    }
}

export default utils;