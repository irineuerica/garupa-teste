import { useMutation } from 'react-query';
import { BeersService } from '../service/beers.service';


export function useGetBeersMutation() {
    const { mutateAsync: getBeers, isLoading: isLoading } = useMutation(
        BeersService.getInstance().getBeers,
        {
            onError(err: any) {
                return err

            },
            onSuccess(data) {
                return data;
            }
        }
    );

    return {
        getBeers,
        isLoading,
    };
}
