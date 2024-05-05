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
import { useNavigate } from "react-router-dom";

type Props = {
    openMenu: boolean;
    onClickOpenMenu: () => void;
    onClickHome: () => void;
    onClickBlog: () => void;
    onClickProfile: () => void;
    onClickGallery: () => void;
};

export const OpenMenu: React.FC<Props> = (props) => {
    const {
        openMenu,
        onClickOpenMenu,
        onClickHome,
        onClickBlog,
        onClickProfile,
        onClickGallery,
    } = props;

    return (
        <Drawer open={openMenu} onClose={onClickOpenMenu}>
            <Box sx={{ width: 250 }} role="presentation">
                <List>
                    <ListItem>
                        <ListItemButton onClick={onClickHome}>
                            <ListItemText
                                primary="HOME"
                                primaryTypographyProps={{ variant: "h5" }}
                            />
                            <ListItemIcon>
                                <HomeIcon
                                    sx={{ fontSize: "35px", marginRight: 6 }}
                                />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>

                    <ListItem>
                        <ListItemButton onClick={onClickBlog}>
                            <ListItemText
                                primary="BLOG"
                                primaryTypographyProps={{ variant: "h5" }}
                            />
                            <ListItemIcon>
                                <ArticleIcon
                                    sx={{ fontSize: "35px", marginRight: 6 }}
                                />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>

                    <ListItem>
                        <ListItemButton onClick={onClickProfile}>
                            <ListItemText
                                primary="自己紹介"
                                primaryTypographyProps={{ variant: "h5" }}
                            />
                            <ListItemIcon>
                                <Face6Icon
                                    sx={{ fontSize: "35px", marginRight: 6 }}
                                />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>

                    <ListItem>
                        <ListItemButton onClick={onClickGallery}>
                            <ListItemText
                                primary="Gallery"
                                primaryTypographyProps={{ variant: "h5" }}
                            />
                            <ListItemIcon>
                                <PhotoLibraryIcon
                                    sx={{ fontSize: "35px", marginRight: 6 }}
                                />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    );
};
