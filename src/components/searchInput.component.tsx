import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import useGameQueryStore from '../store/gameQuery.store';

const SearchInput = () => {
    const ref = useRef<HTMLInputElement>(null);  
    const setSearch = useGameQueryStore(state => state.setSearch);

    return (
        <form style={{width: "100%"}} onSubmit={(event) => {
            event.preventDefault();
            if(ref.current){
                setSearch(ref.current.value);
            }
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch/>}/>
                <Input borderRadius={20} placeholder="Search games..." ref={ref} variant="filled"/>
            </InputGroup>
        </form>
    )
}

export default SearchInput