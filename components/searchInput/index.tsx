import SearchIcon from '@mui/icons-material/Search';
import { Dispatch, SetStateAction } from 'react';
import searchInputStyle from '../../styles/components/searchInput.module.css'
import CloseIcon from '@mui/icons-material/Close';

interface IProps {
  placeholer?: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>
}

const SearchInput = (props: IProps) => {
  return (
    <div className='border rounded-full p-3'>
      <SearchIcon className='text-secondary'></SearchIcon>
      <input placeholder={props.placeholer} className={`mx-2 text-sm ${searchInputStyle.input}`} value={props.value} onChange={(e) => props.setValue(e.target.value)}></input>
      <CloseIcon className='text-sm text-secondary hover:cursor-pointer hover:scale-125 hover:rotate-180 transition  hover:ease-in duration-600' onClick={() => props.setValue('')}></CloseIcon>
    </div>
  )
}

export default SearchInput