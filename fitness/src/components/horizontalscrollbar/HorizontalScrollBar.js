import { Box } from "@mui/material"
import BodyPart from "../bodypart/BodyPart"

const HorizontalScrollBar = ({ data, BodyPart, setBodyPart }) => {
  return (
    <div>
      {data.map((item) => (
        <Box key={item.id} itemId={item.id} title={item.id} m="0 40px">
          <BodyPart item={item} BodyPart={BodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </div>
  )
}

export default HorizontalScrollBar