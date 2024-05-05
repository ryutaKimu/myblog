import React, { FC, memo } from "react";
import Header from "../layouts/Header";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,Grid } from '@mui/material';
import { title } from "process";
import styled from "@emotion/styled";

const Blog: FC = memo(() => {

  //サンプル
  const blogDatas = [
    {id:1,
    title:"バイデンはAIではない",
    content:"巷ではアメリカ現大統領がAIで、人間ではないという噂が流れている。こんな明らかに嘘っぽい話がなぜ信じられているのか、そもそも信じられているのか？",
    imgUrl:"https://source.unsplash.com/random"
  },
  {id:2,
    title:"バイデンはAIではない",
    content:"巷ではアメリカ現大統領がAIで、人間ではないという噂が流れている。こんな明らかに嘘っぽい話がなぜ信じられているのか、そもそも信じられているのか？",
    imgUrl:"https://source.unsplash.com/random"
  },
  {id:3,
    title:"バイデンはAIではない",
    content:"巷ではアメリカ現大統領がAIで、人間ではないという噂が流れている。こんな明らかに嘘っぽい話がなぜ信じられているのか、そもそも信じられているのか？",
    imgUrl:"https://source.unsplash.com/random"
  },
  {id:4,
    title:"バイデンはAIではない",
    content:"巷ではアメリカ現大統領がAIで、人間ではないという噂が流れている。こんな明らかに嘘っぽい話がなぜ信じられているのか、そもそも信じられているのか？",
    imgUrl:"https://source.unsplash.com/random"
  },
  {id:5,
    title:"バイデンはAIではない",
    content:"巷ではアメリカ現大統領がAIで、人間ではないという噂が流れている。こんな明らかに嘘っぽい話がなぜ信じられているのか、そもそも信じられているのか？",
    imgUrl:"https://source.unsplash.com/random"
  },
  {id:6,
    title:"バイデンはAIではない",
    content:"巷ではアメリカ現大統領がAIで、人間ではないという噂が流れている。こんな明らかに嘘っぽい話がなぜ信じられているのか、そもそも信じられているのか？",
    imgUrl:"https://source.unsplash.com/random"
  },
  {id:7,
    title:"バイデンはAIではない",
    content:"巷ではアメリカ現大統領がAIで、人間ではないという噂が流れている。こんな明らかに嘘っぽい話がなぜ信じられているのか、そもそも信じられているのか？",
    imgUrl:"https://source.unsplash.com/random"
  },
  {id:8,
    title:"バイデンはAIではない",
    content:"巷ではアメリカ現大統領がAIで、人間ではないという噂が流れている。こんな明らかに嘘っぽい話がなぜ信じられているのか、そもそも信じられているのか？",
    imgUrl:"https://source.unsplash.com/random"
  },
  {id:9,
    title:"バイデンはAIではない",
    content:"巷ではアメリカ現大統領がAIで、人間ではないという噂が流れている。こんな明らかに嘘っぽい話がなぜ信じられているのか、そもそも信じられているのか？",
    imgUrl:"https://source.unsplash.com/random"
  },
  {id:10,
    title:"バイデンはAIではない",
    content:"巷ではアメリカ現大統領がAIで、人間ではないという噂が流れている。こんな明らかに嘘っぽい話がなぜ信じられているのか、そもそも信じられているのか？",
    imgUrl:"https://source.unsplash.com/random"
  },
  ]

  return (
    <>
      <Header/>
      <SH1>ブログ画面です</SH1>
      <Grid container spacing={2}>
      {blogDatas.map((blog)=>(
        <Grid item key={blog.id} xs={7} sm={3} md={4}>
           <div style={{ paddingLeft: "20px",marginBottom:"20px" }}>
            <Card key={blog.id} sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={blog.imgUrl}
                alt={blog.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {blog.content}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </div>
          </Grid>
      ))}
      </Grid>
    </>
  );
});

const SH1 = styled.h1`
margin-bottom:40px;
margin-right:25px;
margin-top:30px;
text-align:center;
font-family: "Dancing Script";
`

export default Blog;
