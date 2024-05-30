export const ages = [18, 20, 22, 1, 100, 90, 14];

export const predicate = (age: number) => age > 90;

type CourseType = {
  title: string;
  price: number;
};
export const courses = [
  { title: "css", price: 110 },
  { title: "js", price: 200 },
  { title: "react", price: 150 },
];

export const cheapCourses = (course: CourseType) => course.price < 160;
