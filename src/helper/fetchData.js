import axios from '../api/axios'

async function useFetch({ method, url, data = null, config = null }) {
    try {
        const response = await axios[method](url, JSON.parse(config), JSON.parse(data))
            .then((res) => res?.data?.results)
        return response
    } catch (err) {
        console.log(err);
    }
}
export default useFetch

