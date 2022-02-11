export interface CoursePartBase {
  name: string;
  exerciseCount: number;
  type: string;
}

export interface CourseWithDescriptionBase extends CoursePartBase {
  description: string;
}

export interface CourseNormalPart extends CourseWithDescriptionBase {
  type: "normal";
}

export interface CourseProjectPart extends CoursePartBase {
  type: "groupProject";
  groupProjectCount: number;
}

export interface CourseSubmissionPart extends CourseWithDescriptionBase {
  type: "submission";
  exerciseSubmissionLink: string;
}

export interface CourseSpecialPart extends CourseWithDescriptionBase {
  type: "special";
  requirements: string[];
}

export type CoursePart =
  | CourseNormalPart
  | CourseProjectPart
  | CourseSubmissionPart
  | CourseSpecialPart;

export interface ContentProps {
  courseParts: CoursePart[];
}

export interface PartProps {
  part: CoursePart;
}
export interface TitleProps {
  title: string;
}
export interface TotalExerciseProps {
  exerciseCount: number;
}
