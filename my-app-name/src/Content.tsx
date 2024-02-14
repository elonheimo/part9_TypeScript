import Part from "./Part"
import { CoursePart } from "./interfaces"

const Content = ({ courseParts } : { courseParts: CoursePart[]}) => {
  return (
    (courseParts.map((coursePart : CoursePart) => (
      <Part coursePart={coursePart}/>
    )))
  )
}

export default Content