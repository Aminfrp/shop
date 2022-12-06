import AppBar from '@mui/material/AppBar';
import Image from 'next/image';
import Link from 'next/link';
import { LINKS } from '../../constants';
import ShopImage from "../../public/favicon.ico"
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import SearchInput from '../searchInput';
import { useState } from 'react';
import headerStyle from '../../styles/components/header.module.css'


const Header = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");
  return (
    <nav className='box-container'>
      <AppBar position="static" color='transparent' sx={{ boxShadow: 'none' }}>
        <header className='flex justify-between items-center py-5'>
          {/* website icon */}
          <Link href='/ '>
            <div className='w-[5rem] h-[5rem] relative'>
              <Image src={ShopImage} alt='shop-icon' fill></Image>
            </div>
          </Link>

          {/* links */}
          <ul className='flex'>
            {LINKS.map((link, index) => (
              <Link href={link.url} key={index} className={`mx-5 py-2 ${headerStyle.navLink} ${router.pathname === link.url && headerStyle.activeLink}`}>
                <li>{link.name}</li>
              </Link>
            ))}
          </ul>

          {/* search */}
          <SearchInput value={search} setValue={setSearch} placeholer="What do you looking for?" ></SearchInput>

          {/* sign in */}
          <Button variant='contained' className='rounded-full'> Signin</Button>
        </header>
      </AppBar>
    </nav>
  )
}

export default Header