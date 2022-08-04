import { Box, Typography } from "@mui/material"
import BodyPart from "../bodypart/BodyPart"
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu"
import { useContext } from "react"
import LeftArrowIcon from '../../assets/icons/left-arrow.png'
import RightArrowIcon from '../../assets/icons/right-arrow.png'


const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  const handleScrollPrev = () => {
    scrollPrev()
  }

  return (
    <Typography onClick={handleScrollPrev} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  const handleScrollNext = () => {
    scrollNext()
  }

  return (
    <Typography onClick={handleScrollNext} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => (
      <Box key={item.id} itemId={item.id} title={item.id} m="0 40px">
        <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    ))}
  </ScrollMenu>
);

export default HorizontalScrollbar;
