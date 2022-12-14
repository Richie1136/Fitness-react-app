import BodyPart from "../bodypart/BodyPart"
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { useContext } from "react"
import { Box, Typography } from '@mui/material';
import RightArrowIcon from '../../assets/icons/right-arrow.png'
import LeftArrowIcon from '../../assets/icons/left-arrow.png'
import ExerciseCard from "../exercisecard/ExerciseCard"



const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  const handlePrev = () => {
    scrollPrev()
  }

  return (
    <Typography onClick={handlePrev} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  const handleNext = () => {
    scrollNext()
  }

  return (
    <Typography onClick={handleNext} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} />}
      </Box>
    ))}
  </ScrollMenu>
);

export default HorizontalScrollbar;