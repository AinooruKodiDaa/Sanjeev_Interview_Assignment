import { AxiosWrapper } from "../axios";
import { ENDPOINTS } from "../server_api";

 export const getAllProducts = async () => {
    return await AxiosWrapper({
        method:"GET",
        url: ENDPOINTS.getAllProducts,
        defaultHeaders:true
    })
}