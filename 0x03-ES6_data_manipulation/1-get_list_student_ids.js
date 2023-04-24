// A function that returns an array of ids from a list of object.
export default function getListStudentIds(ListStudentIds) {
  if (Array.isArray(ListStudentIds)) {
    return ListStudentIds.map((obj) => obj.id);
  }

  return [];
}
