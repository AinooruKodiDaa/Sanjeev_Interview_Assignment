import { useQuery } from '@tanstack/react-query';
import { getAllProducts } from '../handlers/products';
import markers from "../../MOCK_DATA.json"

export const useProducts = () => {
    const allProductsQuery = useQuery({
        queryKey: ["allProducts"],
        queryFn: ()=> getAllProducts(),
        
    });
    return { allProductsQuery };
}
