import { useEffect, useState } from 'react'
import axios from 'axios'
import Layout from '../Components/Layout/Layout'
import Feed from '../Components/Feed/Feed'
import Suggestion from '../Components/Suggestion/Suggestion'

const index = ({ post }) => {



return (
  <Layout>
      <Feed post={post} />
      <Suggestion></Suggestion>
    </Layout>
  )
}



export default index

export async function getServerSideProps(context) {
  // aqui vai a busca dos dados no mongo db

  const data = [
    {
      id: 1,
      author: {id:1, avatar:'https://avatars.githubusercontent.com/u/47829164?s=60&v=4', name:'Nelcael Alves Ferreira',username:'nelcael07'},
      description:'Descrição',
      tags:[
        {title:'#youtube'},
        {title:'#clone'}
      ],
      songName:'Tampa - TampaCurhat',
      videoURL:'https://v77.tiktokcdn.com/9a8c3400cb9cb78b1be491e85b00c73f/60ee355c/video/tos/useast2a/tos-useast2a-pve-0068/7d32cb0edb014caab9d58b910d1b023a/?a=1233&br=4666&bt=2333&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210713185234010190189137213401F4&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amdxcjtyc3A6NTMzNzczM0ApNTU7Nzw6NGRmNzU1ZjozZ2dwamYxcHJfcm5gLS1kMTZzczItMF5fMDQuYzIwLzAuXzY6Yw%3D%3D&vl=&vr= ',
      likes:650,
      comments:10,
      replies:50  
    },
    {
      id: 2,
      author: {id:1, avatar:'https://avatars.githubusercontent.com/u/47829164?s=60&v=4', name:'Nelcael Alves Ferreira',username:'nelcael07'},
      description:'Descrição2',
      tags:[
        {title:'#youtube2'},
        {title:'#clone2'}
      ],
      songName:'Musica2',
      videoURL:'https://v58.tiktokcdn.com/video/tos/useast2a/tos-useast2a-pve-0068/06b37d2e2cf44e77b4ae49e7040e5127/?VExpiration=1626223976&VSignature=x9ms6ucZ6_-Xf-F50_oK7A&a=1233&br=2632&bt=1316&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202107131852380101910640122F35DE64&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzRnbGt2NjllNjMzNzczM0ApaGQ4O2Q6ZzxpNzZnPDo6OGcyaTZzMjBybGRgLS1kMTZzcy0yNS0uYzEuMzBjX2FgYWI6Yw%3D%3D&vl=&vr=',
      likes:652,
      comments:12,
      replies:52  
    }
  ]
  return {
    props: {
      post: data,
    },
  }
}