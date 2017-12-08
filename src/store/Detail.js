import axios from '../axios';

class Detail {
    async getDetail ({id}) {
        const url = `/topic/${id}?mdrender=true`;
        const { data } = await axios.get(url);
        console.log("get detail data");
    }
}

export default new Detail();