import styled, { css } from 'styled-components'

export const Header = styled.header`
  height: 10vh;
`

export const DivMaster = styled.div`
  display: flex;
  background: #370000;
  padding-bottom: 5px;
  align-items: center;
  align-content: center;
`

export const Link = styled.a`
  display: flex;
  font-family: 'Bebas Neue', sans-serif;
  color: white;
  font-size: 25px;
  margin-left: 60px;
  text-decoration: none;

  position: relative;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: white;
    transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
  }

  &:hover::before {
    left: 0;
    width: 100%;
  }
  ${props =>
    props.isFirstLink &&
    `
    margin-left: 220px;
  `}
`

export const Logo = styled.img`
  width: 60px;
  height: 60px;
  margin: 5px 20px 0px 150px;
  border-radius: 50%;
`

export const BoxMain = styled.div`
  display: flex;
  flex-direction: column;
  background: url('./videos/my-video.mp4');
  align-items: center;
  height: 90vh;
`

export const Name = styled.h1`
  font-family: 'Metal Mania', cursive;
  margin-top: 15px;
`

export const Titles = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  margin-top: 10px;
  align-self: center;

  ${props =>
    props.isTitleName &&
    `
    color: white;
    margin-top: 0;
    padding-top: 30px;
  `}

  ${props =>
    props.isTitleName2 &&
    `
    color: black;
    margin-top: 0;
    padding-top: 30px;
  `}
`

export const Image = styled.img`
  width: 300px;
  height: 400px;
  position: absolute;
  top: 140px;
  left: 100px;
`

export const Group = styled.div`
  margin-left: 500px;
  align-items: center;
  display: flex;
  flex-direction: column;

  ${props =>
    props.isGroup &&
    `
  margin: 0px;
  flex-direction: row;
  padding-left:100px;
  padding-right: 100px;
  
  `}
`

export const Text = styled.p`
  font-family: 'Abel', sans-serif;
  width: 500px;
  font-size: 18px;
  font-style: italic;

  ${props =>
    props.isTextRetirement &&
    `
margin-left: 300px;
  `}
`

export const BoxRecords = styled.div`
  background: #370000;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const TextRecords = styled.p``

export const BoxList = styled.div`
  background: linear-gradient(to bottom right, #33384e, #2a0000);
  margin: 10px;
  width: 50vh;
  height: 75vh;
  border-radius: 5px;
  padding: 40px;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.01);
  }
`

export const List = styled.ul``

export const Item = styled.li`
  padding-left: 10px;
  margin-left: 10px;
  text-indent: -20px;
  color: white;
  font-family: 'Nokora', sans-serif;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 13px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`

export const SubName = styled.h3`
  color: white;
`

export const BoxRetirement = styled.div`
  background: #d9d9d9;
  height: 100vh;
  position: relative;
`

export const ImageRetirement = styled.img`
  width: 400px;
  height: 300px;
  position: absolute;
  top: 100px;
  left: 100px;
`

export const GroupRetirement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
