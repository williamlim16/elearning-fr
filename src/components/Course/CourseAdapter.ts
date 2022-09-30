import { Course, CourseResponse } from "../../types/course";

export const allCourseAdapter = (dataResponse: CourseResponse[]): Course[] => {
  const data: Course[] = [];
  const course: Course = {
    averageRating: 0,
    id: "",
    lecturer: "",
    name: "",
  };
  dataResponse.forEach((element) => {
    course.id = element.id;
    course.name = element.name;
    course.lecturer = element.lecturer.name;
    course.averageRating = element.averageRating;
    data.push(course);
  });
  return data;
};

export default allCourseAdapter;
