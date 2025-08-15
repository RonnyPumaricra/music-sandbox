import styled from "styled-components"

export function ConfigTitle({
  title,
  ...delegated
}) {
  return<TitleWrapper {...delegated}>
    <Title>{title}</Title>
    <TitleBar />
    <Brand>MUSIC SANDBOX</Brand>
  </TitleWrapper>
}

const TitleWrapper = styled.div`
  width: max-content;
`

const Title = styled.h1`
  font-family: "Overpass";
  font-size: 80px;
  line-height: 1;
`

const TitleBar = styled.div`
  margin-top: -8px;
  margin-bottom: 12px;
  height: 8px;
  background: black;
`

const Brand = styled.span`
  font-family: "Gothic A1";
  font-size: 24px;
  font-weight: 300;
  letter-spacing: 8px;
`