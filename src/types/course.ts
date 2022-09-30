export type Course = {
  id: string;
  name: string;
  averageRating: number;
  lecturer: string;
};

export type CourseResponse = {
  id: string;
  name: string;
  averageRating: number;
  lecturerId: string;
  lecturer: {
    name: string;
  };
};
