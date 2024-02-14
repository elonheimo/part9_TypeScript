import { CoursePart } from "./interfaces"

const Part = ({ coursePart } : { coursePart: CoursePart }) => {
  switch (coursePart.kind) {
    case "basic":
      return <p>
        <b>{coursePart.name} {coursePart.exerciseCount}</b>
        <br /><em>{coursePart.description}</em>
      </p>
    case "group":
      return <p>
        <b>{coursePart.name} {coursePart.exerciseCount}</b>
        <br />group exercises {coursePart.groupProjectCount}
      </p>
    case "background":
      return <p>
        <b>{coursePart.name} {coursePart.exerciseCount}</b>
        <br /><em>{coursePart.description}</em>
        <br />submit to: {coursePart.backgroundMaterial}
      </p>
    case "special":
      return <p>
        <b>{coursePart.name} {coursePart.exerciseCount}</b>
        <br /><em>{coursePart.description}</em>
        <br />required skillz: {coursePart.requirements.join(', ')}
      </p>
    default:
      return "error :)"
  }
    
}

export default Part