import styled from "styled-components"

export function ModePagination({pages, subtitle, pageIndex, setPageIndex}) {
  return <div>
    <TitleOverlap
      onClick={() => setPageIndex(pageIndex ? 0 : 1)}
    >
      <PageTitle
        $active={pageIndex == 0}
      >{pages[0]}123123</PageTitle>
      <PageTitle
        $active={pageIndex == 1}
        $right
      >{pages[1]}</PageTitle>
    </TitleOverlap>
    <div className="bar"></div>
    <Subtitle
      $isRight={pageIndex == 1}
    >
      {subtitle}
    </Subtitle>
  </div>
}

const TitleOverlap = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  /* background: limegreen; */

  display: flex;
  justify-content: space-between;
`

const PageTitle = styled.h2`
  --x-translate: ${props => {
    console.log("Rewritten")
    return props.$right ? "-200px" : "200px"
  }};
  width: fit-content;
  /* background: skyblue; */
  position: relative;

  transition: opacity 200ms, translate 200ms;
  translate: ${props => props.$active ? "0" : "var(--x-translate)"};
  opacity: ${props => props.$active ? 1 : 0};
  
`

const Subtitle = styled.div`
  position: relative;
  /* background: pink; */
  width: fit-content;
  transition: translate 200ms;
  translate: ${p => p.$isRight ? "calc(100vw - 100%)" : 0} 0;
`