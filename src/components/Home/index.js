import { Box, Typography, FilledInput, IconButton } from "@mui/material";
import { Search as SearchIcon, Bookmark as BookmarkIcon } from "@mui/icons-material";

const Home = ()=>{
    return(
        <Box>
            <img />
            <Typography>
                Dictionary
            </Typography>
            <Typography>
               find meanings and save for quick refrence
            </Typography>
            <IconButton>
                <BookmarkIcon />
            </IconButton>
        </Box>
    )
}
export default Home;