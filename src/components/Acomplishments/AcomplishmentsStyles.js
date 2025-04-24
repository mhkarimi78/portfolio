import styled from "styled-components"

export const Boxes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 24px;
  margin: 24px 0 40px;

  @media ${props => props.theme.breakpoints.md}{
    gap: 16px;
    margin: 20px 0 32px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }
`

export const Box = styled.a`
  background: #212D45;
  border-radius: 12px;
  padding: 24px;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    background: #1E2640;
  }

  @media ${props => props.theme.breakpoints.lg} {
    padding: 20px;
  }

  @media ${props => props.theme.breakpoints.md} {
    padding: 16px;
  }
`

export const BoxTitle = styled.h3`
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md}{
    font-size: 20px;
    line-height: 26px;
  }
`

export const BoxText = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 16px;
`

export const BoxDate = styled.span`
  font-size: 14px;
  line-height: 22px;
  color: rgba(255, 255, 255, 0.5);
  display: block;
`

export const BoxVenue = styled.span`
  font-size: 14px;
  line-height: 22px;
  color: rgba(255, 255, 255, 0.5);
  display: block;
  margin-top: 4px;
`

export const Join = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${props => props.theme.breakpoints.md}{
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`

export const JoinText = styled.h5`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

@media ${props => props.theme.breakpoints.md}{
  line-height: 32px;
  font-size: 20px;
};

@media ${props => props.theme.breakpoints.sm}{
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 16px;
}
`

export const IconContainer = styled.div`
  display: flex;

  @media ${props => props.theme.breakpoints.sm}{
    width: 160px;
    justify-content: space-between;
  }
`
