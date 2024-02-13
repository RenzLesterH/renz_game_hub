import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';

interface Props {
    onSearch: (search: string) => void;
}

const SearchInput = ({onSearch}: Props) => {
    const ref = useRef<HTMLInputElement>(null);  

    return (
        <form style={{width: "100%"}} onSubmit={(event) => {
            event.preventDefault();
            if(ref.current){
                onSearch(ref.current.value);
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