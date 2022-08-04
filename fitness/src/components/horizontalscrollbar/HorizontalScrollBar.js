import { Box } from "@mui/material"
import BodyPart from "../bodypart/BodyPart"
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu"

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu>
      {data.map((item) => (
        <Box key={item.id} itemId={item.id} title={item.id} m="0 40px">
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollBar