// import styled-components
import {
  Container,
  Header,
  PersonContainer,
  Avatar,
  Info,
  Author,
  Description,
  Tag,
  Content,
  Song,
  VideoContainer,
  Video,
  ActionContainer,
  PlayerIcon,
  Actions,
  Action,
  ButtonContainer,
} from './s_postcard'

// import components
import Button from '../Button/Button';

import {useState, useRef} from 'react'

const PostCard = ({data}) => {
  const videoRef = useRef();
  const [running, setRunning] = useState(false)

  const handleClick = () =>{
    if (videoRef?.current != null) {
      if (!running) {
        videoRef.current.play()
      }else{
        videoRef.current.pause()
      }
      setRunning(!running)
    }
  }

  return (
    <Container>
      <Header>
        <PersonContainer>
          <Avatar src={data?.author?.avatar}></Avatar>
          <Info>
            <Author>{data?.author?.username}
              <span>{data?.author?.name}</span>
            </Author> 
            <Description>
              <span>{data?.description}</span>
              {data.tags.map((item,key) =>(
                <Tag key={key} data={item}>{item.title}</Tag>
              ))}
            </Description>
          </Info>
        </PersonContainer>
        <ButtonContainer>
          <Button fontSize={14} outlined></Button>
        </ButtonContainer>
      </Header>
      <Content>
        <Song>
          <img src="/images/songIcon.svg" alt="" />
          <a href=''>{data?.songName}</a>
        </Song>
        <VideoContainer>
          <Video src={data?.videoURL}
            ref={videoRef}
            webkit-playsinline='true'
            playsinline=''
            loop='true'
            preload='metadata'
          ></Video>
          <ActionContainer onClick={handleClick}>
            <PlayerIcon src={running ? '/images/pauseIcon.svg' :'/images/playIcon.svg'}></PlayerIcon>
          </ActionContainer> 
        </VideoContainer>
      </Content>
      <Actions>
        <Action>
          <img src="/images/heartIcon.svg" alt="" />
          <a> {data?.likes}</a>
        </Action>
        <Action>
          <img src="/images/bubbleIcon.svg" alt="" />
          <a>{data?.comments}</a>
        </Action>
        <Action>
          <img src="/images/ArrowIcon.svg" alt="" />
          <a>{data?.replies}</a>
        </Action>
      </Actions>
    </Container>
  );
}

export default PostCard;
