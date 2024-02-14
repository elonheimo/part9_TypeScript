export interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

export interface CoursePartDescriptionBase {
  description: string;
}
export interface CoursePartBasic extends CoursePartBase, CoursePartDescriptionBase{
  kind: "basic"
}
export interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind: "group"
}
export interface CoursePartBackground extends CoursePartBase, CoursePartDescriptionBase {
  backgroundMaterial: string;
  kind: "background"
}

export interface CoursePartSpecial extends CoursePartBase, CoursePartDescriptionBase {
  requirements: string[];
  kind: "special"
}

export type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground | CoursePartSpecial;