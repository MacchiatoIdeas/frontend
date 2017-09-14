export const subject = (subject, state) => {
  subject.units = subject.units.map(id => state.units[id]);
  subject.guides = subject.guides.map(id => ({
    ...state.guides[id],
    author: state.authors[state.guides[id].user]
  }));
  return subject;
};
