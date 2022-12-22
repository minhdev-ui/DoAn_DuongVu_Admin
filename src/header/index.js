import { Stack } from "@mui/material"
import { MenuIcon, CloseIcon } from "../icons";
const Header = () => {
    return (
        <Stack direction='row' width='100%' justifyContent='space-between' padding='10px 20px'>
            <MenuIcon sx={{
                fontSize: 40,
                color: '#fff',
            }}/>
            <CloseIcon sx={{
                color: '#fff',
                fontSize: 40,
            }}/>
        </Stack>
    )
}

export default Header;