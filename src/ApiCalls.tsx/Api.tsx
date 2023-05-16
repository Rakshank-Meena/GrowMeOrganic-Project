import axios from "axios";

const apiCalls = async (
    onSuccess: (arg: any) => any,
    onFailure: (arg: any) => any,
    url: string
    ) => {
        axios.get(`${url}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            withCredentials: true,
        }).then((response) => {
            onSuccess(response)
        }).catch((e: any) => { return onFailure(e) })

}
export default apiCalls