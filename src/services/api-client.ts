import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key: '0d92d686171d490494520111546c8b94',
    }
})