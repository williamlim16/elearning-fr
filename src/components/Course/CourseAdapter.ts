import { Course, CourseResponse } from "../../types/course";

export const allCourseAdapter = (dataResponse: CourseResponse[]): Course[] => {
  const data: Course[] = dataResponse.map((element) => ({
    id: element.id,
    name: element.name,
    averageRating: element.averageRating,
    lecturer: element.lecturer.name,
  }));
  return data;
};

export default allCourseAdapter;
