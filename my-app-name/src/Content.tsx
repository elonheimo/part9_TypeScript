import { CoursePart } from "./interfaces"

const Content = ({ courseParts } : { courseParts: CoursePart[]}) => {
  return (
    (courseParts.map((coursePart : CoursePart) => (
      <p>
        {coursePart.name} {coursePart.exerciseCount}
      </p>
    )))
  )
}

export default Content