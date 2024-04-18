import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import Face6Icon from "@mui/icons-material/Face6";
import ArticleIcon from "@mui/icons-material/Article";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";

type Props = {
    openMenu: boolean;
    onClickOpenMenu: () => void;
};

export const OpenMenu: React.FC<Props> = (props) => {
    const { openMenu, onClickOpenMenu } = props;

    const icons = [
        <HomeIcon />,
        <ArticleIcon />,
        <Face6Icon />,
        <PhotoLibraryIcon />,
    ];
    return (
        <Drawer open={openMenu} onClose={onClickOpenMenu}>
            <Box sx={{ width: 250 }} role="presentation">
                <List>
                    {["Top", "ブログ", "自己紹介", "gallery"].map(
                        (text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{icons[index]};</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        )
                    )}
                </List>
            </Box>
        </Drawer>
    );
};
